# Deploy

Этот проект является статическим Vite-сайтом. Правильная схема деплоя:

1. Локально или в GitHub Actions выполнять `npm ci && npm run build`
2. Забирать содержимое `dist/`
3. Копировать `dist/` на сервер
4. Раздавать файлы через `nginx`
5. SSL выпускать через `certbot`

Ниже схема под Ubuntu + Nginx + GitHub Actions.

## 1. Что нужно на сервере

Установить пакеты:

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx rsync
```

Создать директорию под сайт:

```bash
sudo mkdir -p /var/www/aleks-kotov/site
sudo chown -R $USER:$USER /var/www/aleks-kotov
```

Если хочешь деплоить не под своим обычным пользователем, а под отдельным `deploy`, используй его. Это безопаснее.

## 2. Привязка домена

У регистратора домена создай DNS-записи:

- `A` запись для `@` на IP сервера
- `A` запись для `www` на IP сервера

Подожди, пока DNS распространится.

## 3. Настройка Nginx

В репозитории есть пример: [deploy/nginx.aleks-kotov.conf](/Users/kotoff/aleks-kotov/deploy/nginx.aleks-kotov.conf)

На сервере:

```bash
sudo cp deploy/nginx.aleks-kotov.conf /etc/nginx/sites-available/aleks-kotov
```

Потом открой файл и замени:

- `example.com`
- `www.example.com`

Дальше включи сайт:

```bash
sudo ln -s /etc/nginx/sites-available/aleks-kotov /etc/nginx/sites-enabled/aleks-kotov
sudo nginx -t
sudo systemctl reload nginx
```

## 4. SSL сертификат

После того как домен уже смотрит на сервер и `nginx` отвечает:

```bash
sudo certbot --nginx -d example.com -d www.example.com
```

`certbot` сам обновит конфиг и включит HTTPS.

## 5. Первый ручной деплой

Локально:

```bash
npm ci
npm run build
rsync -avz --delete dist/ your_user@your_server:/var/www/aleks-kotov/site/
```

После этого сайт уже должен открываться по домену.

## 6. Автодеплой из GitHub

В репозитории уже добавлен workflow:

[deploy.yml](/Users/kotoff/aleks-kotov/.github/workflows/deploy.yml)

Он делает следующее при пуше в `main`:

1. ставит зависимости
2. собирает проект
3. копирует `dist/` на сервер по SSH через `rsync`

### GitHub Secrets

В GitHub репозитории открой:

`Settings -> Secrets and variables -> Actions`

Добавь secrets:

- `SSH_HOST` = IP или домен сервера
- `SSH_USER` = пользователь на сервере
- `SSH_KEY` = приватный SSH ключ
- `SSH_PORT` = обычно `22`
- `SSH_TARGET_DIR` = `/var/www/aleks-kotov/site/`

### Как создать SSH ключ

Локально:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/aleks_kotov_deploy
```

Публичный ключ добавить на сервер:

```bash
ssh-copy-id -i ~/.ssh/aleks_kotov_deploy.pub your_user@your_server
```

Приватный ключ:

```bash
cat ~/.ssh/aleks_kotov_deploy
```

Его содержимое целиком вставляешь в GitHub secret `SSH_KEY`.

## 7. Как дальше обновлять сайт

Обычный рабочий цикл:

```bash
git add .
git commit -m "update site"
git push origin main
```

После `push` GitHub Actions сам соберёт проект и зальёт новый `dist/` на сервер.

## 8. Что важно для этого проекта

Это SPA на React Router, поэтому в `nginx` обязательно нужен:

```nginx
try_files $uri $uri/ /index.html;
```

Иначе прямые переходы по страницам будут давать `404`.

## 9. Самый простой вариант

Если тебе не принципиально держать сайт именно на своём VPS, для такого проекта ещё проще использовать:

- Vercel
- Netlify
- Cloudflare Pages

Но если у тебя уже есть сервер и домен, то `nginx + GitHub Actions + rsync` для этого проекта вполне правильная схема.

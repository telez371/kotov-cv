import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex justify-center text-center text-sm text-muted-foreground">
        <p>{t('footer.built')} © {new Date().getFullYear()} {t('hero.name')}. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>{t('footer.built')} © {new Date().getFullYear()} Alexander Kotov. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;

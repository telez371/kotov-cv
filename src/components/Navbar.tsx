import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'tr', label: 'TR' },
];

const navKeys = ['about', 'mentorship', 'stack', 'experience', 'achievements', 'cases', 'hobbies', 'contact'] as const;

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    // Default to dark
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="font-heading font-bold text-xl tracking-tight text-foreground">
          AK<span className="text-primary">.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navKeys.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              <Globe className="w-4 h-4" />
              {languages.find(l => l.code === i18n.language)?.label || 'EN'}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 top-full mt-1 glass-card rounded-lg overflow-hidden min-w-[80px]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false); }}
                      className={`block w-full px-3 py-2 text-sm text-left transition-colors ${
                        i18n.language === lang.code ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-foreground">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border"
          >
            <div className="section-container py-4 flex flex-col gap-3">
              {navKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-1"
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { i18n.changeLanguage(lang.code); }}
                      className={`text-xs px-2 py-1 rounded ${
                        i18n.language === lang.code ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

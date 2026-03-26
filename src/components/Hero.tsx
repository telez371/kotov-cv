import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      style={{ background: 'var(--hero-gradient)' }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-32 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-[12%] h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="section-container w-full">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge-available mb-6 inline-flex">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {t('hero.name')}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <p className="font-heading text-xl font-medium text-muted-foreground sm:text-2xl">
                {t('hero.title')}
              </p>
              <p className="mt-1 font-heading text-lg font-semibold text-primary">
                {t('hero.subtitle')}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-10 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground"
            >
              {t('hero.tagline')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ArrowDown className="h-4 w-4" />
                {t('hero.cta_experience')}
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Mail className="h-4 w-4" />
                {t('hero.cta_contact')}
              </button>
              <a
                href="/Alexander_Kotov_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Download className="h-4 w-4" />
                {t('hero.cta_cv')}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto w-full max-w-[400px]"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-[0_28px_64px_-36px_rgba(15,23,42,0.35)]">
              {!imageError ? (
                <img
                  src="/profile-photo.jpg"
                  alt={t('hero.photo_alt')}
                  className="h-full w-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex h-full w-full flex-col justify-end bg-[linear-gradient(160deg,rgba(15,23,42,0.96),rgba(15,118,110,0.82))] p-8 text-white">
                  <div>
                    <div className="text-6xl font-bold tracking-tight">AK</div>
                    <p className="mt-3 max-w-[14rem] text-sm leading-relaxed text-white/75">
                      {t('hero.photo_fallback')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

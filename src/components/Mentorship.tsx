import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, MessageCircleMore, NotebookPen } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  foundation: <GraduationCap className="h-5 w-5" />,
  practice: <NotebookPen className="h-5 w-5" />,
  support: <MessageCircleMore className="h-5 w-5" />,
};

const Mentorship = () => {
  const { t } = useTranslation();
  const points = t('mentorship.points', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  return (
    <section id="mentorship" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading mb-3">{t('mentorship.heading')}</h2>
          <p className="section-subtitle mb-12">{t('mentorship.subtitle')}</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glass-card rounded-2xl p-8 sm:p-10"
          >
            <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t('mentorship.badge')}
            </div>
            <h3 className="max-w-2xl text-2xl font-semibold leading-tight sm:text-3xl">
              {t('mentorship.title')}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t('mentorship.description')}
            </p>
          </motion.div>

          <div className="grid gap-4">
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {iconMap[point.icon]}
                </div>
                <h3 className="font-heading text-lg font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;

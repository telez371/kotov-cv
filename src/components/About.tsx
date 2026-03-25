import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    { key: 'years' },
    { key: 'frameworks' },
    { key: 'reduction' },
    { key: 'companies' },
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading mb-12">{t('about.heading')}</h2>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-5">
              <p className="text-muted-foreground leading-relaxed text-lg">{t('about.p1')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('about.p2')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('about.p3')}</p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card rounded-xl p-5 text-center"
                >
                  <div className="text-3xl font-bold font-heading text-primary mb-1">
                    {t(`about.highlights.${h.key}`)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(`about.highlights.${h.key}_label`)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Achievements = () => {
  const { t } = useTranslation();
  const items = t('achievements.items', { returnObjects: true }) as Array<{
    metric: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="achievements" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading mb-3">{t('achievements.heading')}</h2>
          <p className="section-subtitle mb-12">{t('achievements.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-colors"
            >
              <div className="text-4xl font-bold font-heading text-primary mb-2 group-hover:scale-105 transition-transform origin-left">
                {item.metric}
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

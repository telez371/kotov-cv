import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Printer, BookOpen } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  printer: <Printer className="w-6 h-6" />,
  book: <BookOpen className="w-6 h-6" />,
};

const Hobbies = () => {
  const { t } = useTranslation();
  const items = t('hobbies.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  return (
    <section id="hobbies" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading mb-3">{t('hobbies.heading')}</h2>
          <p className="section-subtitle mb-12">{t('hobbies.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                {iconMap[item.icon]}
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

export default Hobbies;

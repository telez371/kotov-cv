import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const { t } = useTranslation();
  const items = t('cases.items', { returnObjects: true }) as Array<{
    title: string;
    company: string;
    problem: string;
    solution: string;
    result: string;
  }>;

  return (
    <section id="cases" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading mb-3">{t('cases.heading')}</h2>
          <p className="section-subtitle mb-12">{t('cases.subtitle')}</p>
        </motion.div>

        <div className="space-y-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 sm:p-8"
            >
              <div className="mb-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{item.company}</span>
                <h3 className="font-heading font-semibold text-xl mt-1">{item.title}</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive text-xs font-bold">!</span>
                    <span className="text-sm font-medium text-foreground">Problem</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.problem}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Solution</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.solution}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">✓</span>
                    <span className="text-sm font-medium text-foreground">Result</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

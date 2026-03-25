import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

type TechItem = { name: string; };

const techData: Record<string, TechItem[]> = {
  languages: [
    { name: 'Python' }, { name: 'Elixir' }, { name: 'JavaScript' }, { name: 'GraphQL' }, { name: 'REST API' }, { name: 'gRPC' },
  ],
  testing: [
    { name: 'Pytest' }, { name: 'Playwright' }, { name: 'Selenium' }, { name: 'Postman' }, { name: 'Pydantic' }, { name: 'Faker' },
  ],
  infrastructure: [
    { name: 'Docker' }, { name: 'GitHub Actions' }, { name: 'GitLab CI/CD' }, { name: 'Git' }, { name: 'BrowserStack' },
  ],
  databases: [
    { name: 'PostgreSQL' }, { name: 'RabbitMQ' }, { name: 'Redis' },
  ],
  monitoring: [
    { name: 'Allure' }, { name: 'Datadog' }, { name: 'Swagger' },
  ],
};

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section id="stack" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading mb-3">{t('stack.heading')}</h2>
          <p className="section-subtitle mb-12">{t('stack.subtitle')}</p>

          <div className="space-y-8">
            {Object.entries(techData).map(([category, items], ci) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.1 }}
              >
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  {t(`stack.categories.${category}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item.name}
                      className="px-4 py-2 rounded-lg glass-card text-sm font-medium text-foreground hover:border-primary/30 transition-colors cursor-default"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;

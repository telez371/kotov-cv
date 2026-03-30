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
    <section id="stack" className="relative overflow-hidden bg-secondary/30 py-24">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="lg:pr-72 xl:pr-80"
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 0.92, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="pointer-events-none absolute bottom-6 right-4 hidden w-[250px] lg:block xl:bottom-4 xl:right-6 xl:w-[310px]"
        >
          <div className="relative aspect-[1819/1071] overflow-hidden">
            <img
              src="/aleksandr_signature_white.png"
              alt="Aleksandr Kotov signature"
              className="absolute left-[-3.1%] top-[-13.7%] w-[112.6%] max-w-none"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;

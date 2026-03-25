import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();
  const jobs = t('experience.jobs', { returnObjects: true }) as Array<{
    company: string;
    location: string;
    role: string;
    period: string;
    description: string;
    achievements: string[];
    tech: string[];
  }>;

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading mb-3">{t('experience.heading')}</h2>
          <p className="section-subtitle mb-12">{t('experience.subtitle')}</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="glass-card rounded-xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <h3 className="font-heading font-semibold text-lg">{job.role}</h3>
                      </div>
                      <p className="text-foreground font-medium">{job.company}</p>
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap font-medium">{job.period}</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 italic">{job.description}</p>

                  <ul className="space-y-2 mb-5">
                    {job.achievements.map((a, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

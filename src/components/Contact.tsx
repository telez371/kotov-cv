import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, MapPin, Copy, Check } from 'lucide-react';

const contactItems = [
  { key: 'email', value: 'qalekskotov@gmail.com', href: 'mailto:qalekskotov@gmail.com', icon: Mail },
  { key: 'whatsapp', value: '+90 531 315 1735', href: 'https://wa.me/905313151735', icon: MessageCircle },
  { key: 'telegram', value: '@Kotoff371', href: 'https://t.me/Kotoff371', icon: Send },
];

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="section-heading mb-3">{t('contact.heading')}</h2>
          <p className="section-subtitle mx-auto mb-12">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="max-w-lg mx-auto space-y-4">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-xl p-4 flex items-center justify-between group"
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{t(`contact.${item.key}`)}</p>
                  <p className="text-sm font-medium truncate">{item.value}</p>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard(item.value, item.key)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors shrink-0"
                title={t('contact.copy')}
                aria-label={`${t('contact.copy')} ${t(`contact.${item.key}`)}`}
              >
                {copied === item.key ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass-card rounded-xl p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t('contact.location')}</p>
              <p className="text-sm font-medium">{t('contact.location_value')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

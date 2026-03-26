import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Mentorship from '@/components/Mentorship';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import CaseStudies from '@/components/CaseStudies';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
      >
        {t('nav.skip_to_content')}
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Achievements />
        <CaseStudies />
        <Mentorship />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

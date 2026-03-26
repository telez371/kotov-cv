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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Mentorship />
      <TechStack />
      <Experience />
      <Achievements />
      <CaseStudies />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

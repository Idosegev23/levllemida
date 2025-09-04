import { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeachingMethodsSection from '@/components/TeachingMethodsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'לב ללמידה - למידה מותאמת אישית בעברית ומתמטיקה',
  description: 'שיעורים פרטיים מותאמים אישית בעברית ומתמטיקה לתלמידי בית ספר יסודי. למידה אדפטיבית עם גישה רגשית וטכנולוגית.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TeachingMethodsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
import { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxHeroSection from '@/components/ParallaxHeroSection';
import ParallaxAboutSection from '@/components/ParallaxAboutSection';
import ParallaxTeachingSection from '@/components/ParallaxTeachingSection';
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
        <ParallaxHeroSection />
        <ParallaxAboutSection />
        <ParallaxTeachingSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
import { Metadata } from 'next';
import Header from '@/components/Header';
import UniqueHeroSection from '@/components/UniqueHeroSection';
import MagazineAboutSection from '@/components/MagazineAboutSection';
import NotebookTeachingSection from '@/components/NotebookTeachingSection';
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
        <UniqueHeroSection />
        <MagazineAboutSection />
        <NotebookTeachingSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
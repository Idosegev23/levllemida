import { Metadata } from 'next';
import Header from '@/components/Header';
import UniqueHeroSection from '@/components/UniqueHeroSection';
import MagazineAboutSection from '@/components/MagazineAboutSection';
import GridNotebookSection from '@/components/GridNotebookSection';
import ScrollingTestimonials from '@/components/ScrollingTestimonials';
import CreativeFaqSection from '@/components/CreativeFaqSection';
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
        <GridNotebookSection />
        <ScrollingTestimonials />
        <CreativeFaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
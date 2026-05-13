import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import PortfolioPreview from '@/components/PortfolioPreview';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ValueProps />
        <PortfolioPreview />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

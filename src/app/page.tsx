import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import ForWho from '@/components/ForWho';
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
        <ForWho />
        <PortfolioPreview />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

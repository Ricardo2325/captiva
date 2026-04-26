import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CtaFinal from '@/components/CtaFinal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ValueProps />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Testimonials />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}

import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ValueProps />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

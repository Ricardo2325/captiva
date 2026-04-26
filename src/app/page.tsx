import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <Services />
      <Portfolio />
      <Process />
    </main>
  );
}

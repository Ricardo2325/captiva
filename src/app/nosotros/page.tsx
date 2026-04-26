import type { Metadata } from 'next';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nosotros — Captiva',
  description: 'Somos Ricardo y Alejandro. Una micro-agencia sin capas intermedias especializada en negocios locales.',
};

export default function NosotrosPage() {
  return (
    <>
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </>
  );
}

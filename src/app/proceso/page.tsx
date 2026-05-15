import type { Metadata } from 'next';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Proceso — Baifo Studio',
  description: 'De la llamada inicial al lanzamiento en 2 semanas. Así trabajamos en Baifo Studio.',
};

export default function ProcesoPage() {
  return (
    <>
      <main className="pt-16">
        <Process />
      </main>
      <Footer />
    </>
  );
}

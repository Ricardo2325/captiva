import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contacto — Captiva',
  description: 'Cuéntanos tu proyecto. Respondemos en menos de 24 horas.',
};

export default function ContactoPage() {
  return (
    <>
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}

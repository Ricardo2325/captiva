import type { Metadata } from 'next';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Portfolio — Captiva',
  description: 'Proyectos reales de webs y automatizaciones para entrenadores personales y negocios locales.',
};

export default function PortfolioPage() {
  return (
    <>
      <main className="pt-16">
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

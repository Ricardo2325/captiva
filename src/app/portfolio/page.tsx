import type { Metadata } from 'next';
import PortfolioClient from '@/components/PortfolioClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Portfolio — Baifo Studio',
  description: 'Proyectos reales de webs y automatizaciones para negocios locales.',
};

export default function PortfolioPage() {
  return (
    <>
      <main>
        <PortfolioClient />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';

const PortfolioScroll = dynamic(() => import('@/components/PortfolioScroll'), { ssr: false });

export const metadata: Metadata = {
  title: 'Portfolio — Captiva',
  description: 'Proyectos reales de webs y automatizaciones para entrenadores personales y negocios locales.',
};

export default function PortfolioPage() {
  return (
    <>
      <main>
        <PortfolioScroll />
      </main>
      <Footer />
    </>
  );
}

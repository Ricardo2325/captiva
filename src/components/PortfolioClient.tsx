'use client';

import dynamic from 'next/dynamic';

const PortfolioScroll = dynamic(() => import('./PortfolioScroll'), { ssr: false });

export default function PortfolioClient() {
  return <PortfolioScroll />;
}

'use client';

import dynamic from 'next/dynamic';

const HBAReviewsWidget = dynamic(() => import('./HBAReviewsWidget'), { ssr: false });

export default function HBAReviewsSection() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-2">Member Reviews</h2>
      <p className="text-sm text-gray-500 mb-4">Real reviews from verified HBA members</p>
      <HBAReviewsWidget />
    </section>
  );
}

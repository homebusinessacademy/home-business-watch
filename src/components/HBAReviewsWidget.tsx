'use client';

import { useEffect } from 'react';

export default function HBAReviewsWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://thehba.app/widget/reviews.js';
    script.setAttribute('data-hba-reviews', '');
    script.setAttribute('data-layout', 'carousel');
    script.setAttribute('data-theme', 'auto');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div data-hba-reviews-container />;
}

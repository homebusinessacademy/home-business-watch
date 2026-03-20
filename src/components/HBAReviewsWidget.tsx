'use client';

import { useEffect, useRef } from 'react';

export default function HBAReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove any existing script to avoid duplicates
    const existing = document.querySelector('script[data-hba-reviews]');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.src = 'https://thehba.app/widget/reviews.js';
    // Must set as actual HTML attribute so the widget's querySelectorAll finds it
    script.setAttribute('data-hba-reviews', '');
    script.setAttribute('data-layout', 'carousel');
    script.setAttribute('data-theme', 'auto');
    script.async = true;

    // Append to the container so the widget renders adjacent to the script
    containerRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div ref={containerRef} className="hba-reviews-container" />;
}

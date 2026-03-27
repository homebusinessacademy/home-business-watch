'use client';

import { sendGAEvent } from '@next/third-parties/google';

interface TrackedCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  location: string; // e.g., "company-sidebar", "company-bottom", "comparison-cta"
  companySlug?: string;
}

export function TrackedCTA({ href, children, className, location, companySlug }: TrackedCTAProps) {
  const handleClick = () => {
    sendGAEvent('event', 'cta_click', {
      cta_location: location,
      company_slug: companySlug || 'none',
      destination_url: href,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

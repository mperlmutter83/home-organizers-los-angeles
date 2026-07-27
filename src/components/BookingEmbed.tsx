'use client';

import { useEffect, useRef } from 'react';

/**
 * Yes Crew CRM booking widget for Home Organizers Los Angeles.
 * Auto-resizes via the embed's postMessage height events.
 */
export default function BookingEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data?.type === 'yescrew:embed:height' && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://yescrew-dashboard.vercel.app/book/873ec82a-830c-4b67-a738-eeff4b6d02a9"
      style={{ width: '100%', border: 'none', minHeight: '500px' }}
      title="Book with Home Organizers Los Angeles"
    />
  );
}

'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('BROWSER: NEXT_PUBLIC_SITE_NAME =', process.env.NEXT_PUBLIC_SITE_NAME);
  }, []);

  return (
      <main>
        <h1>Site name: {process.env.NEXT_PUBLIC_SITE_NAME}</h1>
      </main>
  );
}

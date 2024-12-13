// app/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>500 - Internal Server Error</h1>
      <p>Oops! Something went wrong.</p>
      <button onClick={reset} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Try Again
      </button>
    </div>
  );
}

"use client";
import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Redirect to home page after a brief delay
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html>
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: '#f2ede6',
          color: '#1a1a1a',
          fontFamily: 'Manrope, sans-serif',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Something went wrong!</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>An error occurred</p>
          <p style={{ fontSize: '1rem', opacity: 0.7 }}>Redirecting to home page...</p>
          <button 
            onClick={() => reset()}
            style={{
              marginTop: '2rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#1a1a1a',
              color: '#f2ede6',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

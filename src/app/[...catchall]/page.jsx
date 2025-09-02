"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const CatchAllPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page immediately
    router.replace("/");
  }, [router]);

  return (
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
      <p style={{ fontSize: '1rem', opacity: 0.7 }}>Redirecting...</p>
    </div>
  );
};

export default CatchAllPage;

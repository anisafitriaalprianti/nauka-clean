'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main style={styles.wrapper}>
      <div style={styles.glow} />

      <div
        style={{
          ...styles.content,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0px)' : 'translateY(10px)',
        }}
      >
        {/* LOGO FLOATING */}
        <div style={styles.logoWrap}>
          <img
            src="/file_00000000aa1471fab057b72e1ac28d6b.png"
            alt="NAUKA Logo"
            style={styles.logo}
          />
        </div>

        {/* BRAND */}
        <h1 style={styles.title}>NAUKA</h1>

        {/* TAGLINE */}
        <p style={styles.subtitle}>
          Sebuah ruang kecil untuk mengantar momen
        </p>

        {/* BUTTON */}
        <button style={styles.button}>Mulai</button>

        {/* SIGNATURE */}
        <div style={styles.signature}>
          “tenang, sederhana, bermakna”
        </div>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#07070a',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
    padding: '24px',
  },

  /* SOFT BREATHING LIGHT */
  glow: {
    position: 'absolute',
    width: '700px',
    height: '700px',
    background:
      'radial-gradient(circle, rgba(255,255,255,0.07), transparent 60%)',
    top: '-250px',
    left: '-250px',
    filter: 'blur(70px)',
    animation: 'breath 6s ease-in-out infinite',
  },

  content: {
    textAlign: 'center',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
    transition: 'all 1.2s ease',
  },

  /* FLOATING LOGO */
  logoWrap: {
    padding: '24px',
    borderRadius: '999px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    boxShadow: '0 0 80px rgba(255,255,255,0.12)',
    backdropFilter: 'blur(14px)',
    animation: 'float 6s ease-in-out infinite',
  },

  logo: {
    width: '150px',
    height: '150px',
    objectFit: 'contain',
    display: 'block',
  },

  title: {
    fontSize: '34px',
    letterSpacing: '7px',
    fontWeight: 300,
  },

  subtitle: {
    fontSize: '14px',
    opacity: 0.7,
    maxWidth: '280px',
    lineHeight: '1.6',
  },

  button: {
    marginTop: '14px',
    padding: '10px 26px',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.18)',
    background: 'rgba(255,255,255,0.04)',
    color: 'white',
    fontSize: '13px',
    letterSpacing: '1px',
    cursor: 'pointer',
    transition: '0.3s ease',
  },

  signature: {
    marginTop: '10px',
    fontSize: '12px',
    opacity: 0.4,
    letterSpacing: '1px',
  },
};

/* inject keyframes */
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }

    @keyframes breath {
      0% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
      100% { opacity: 0.5; transform: scale(1); }
    }
  `;
  document.head.appendChild(style);
}

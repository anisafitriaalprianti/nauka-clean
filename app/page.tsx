'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.glow} />

      <div style={styles.content}>
        {/* LOGO */}
        <div style={styles.logoWrap}>
          <Image
            src="/file_00000000aa1471fab057b72e1ac28d6b.png"
            alt="NAUKA Logo"
            width={150}
            height={150}
            priority
          />
        </div>

        {/* BRAND */}
        <h1 style={styles.title}>NAUKA</h1>

        {/* TAGLINE */}
        <p style={styles.subtitle}>
          Sebuah ruang kecil untuk mengantar momen
        </p>

        {/* SMALL SIGNATURE */}
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

  glow: {
    position: 'absolute',
    width: '420px',
    height: '420px',
    background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent 60%)',
    top: '-120px',
    left: '-120px',
    filter: 'blur(40px)',
  },

  content: {
    textAlign: 'center',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
  },

  logoWrap: {
    padding: '18px',
    borderRadius: '999px',
    background: 'rgba(255,255,255,0.03)',
    boxShadow: '0 0 40px rgba(255,255,255,0.05)',
    backdropFilter: 'blur(10px)',
  },

  title: {
    fontSize: '30px',
    letterSpacing: '6px',
    fontWeight: 300,
    marginTop: '8px',
  },

  subtitle: {
    fontSize: '14px',
    opacity: 0.65,
    maxWidth: '280px',
    lineHeight: '1.6',
  },

  signature: {
    marginTop: '10px',
    fontSize: '12px',
    opacity: 0.4,
    letterSpacing: '1px',
  },
};

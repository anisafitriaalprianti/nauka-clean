'use client';

export default function Home() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.glow} />

      <div style={styles.content}>
        {/* LOGO (SAFE IMG, NO NEXT IMAGE BUG) */}
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
        <button style={styles.button}>
          Mulai
        </button>

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

  glow: {
    position: 'absolute',
    width: '520px',
    height: '520px',
    background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent 60%)',
    top: '-160px',
    left: '-

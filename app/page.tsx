'use client';

export default function Page() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.glow} />

      <div style={styles.content}>
        {/* LOGO */}
        <div style={styles.logoWrap}>
          <img
            src="/file_00000000aa1471fab057b72e1ac28d6b.png"
            alt="logo"
            style={styles.logo}
          />
        </div>

        {/* TAGLINE */}
        <p style={styles.subtitle}>
          Sebuah ruang kecil untuk mengantar momen
        </p>

        {/* BUTTON FIXED */}
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
    width: '700px',
    height: '700px',
    background:
      'radial-gradient(circle, rgba(255,255,255,0.10), transparent 60%)',
    top: '-260px',
    left: '-260px',
    filter: 'blur(70px)',
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
    padding: '26px',
    borderRadius: '999px',
    background: 'rgba(255,255,255,0.08)', // 🔥 ditingkatin biar logo keliatan
    border: '1px solid rgba(255,255,255,0.18)',
    boxShadow: '0 0 90px rgba(255,255,255,0.18)',
    backdropFilter: 'blur(14px)',
  },

  logo: {
    width: '150px',
    height: '150px',
    objectFit: 'contain',
    filter: 'brightness(1.3) contrast(1.1)', // 🔥 INI FIX LOGO GELAP
  },

  subtitle: {
    fontSize: '14px',
    opacity: 0.75,
    maxWidth: '280px',
    lineHeight: '1.6',
  },

  button: {
    marginTop: '14px',
    padding: '10px 28px',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'rgba(255,255,255,0.05)',
    color: 'white',
    fontSize: '13px',
    letterSpacing: '1px',
    cursor: 'pointer',
  },

  signature: {
    marginTop: '10px',
    fontSize: '12px',
    opacity: 0.45,
  },
};

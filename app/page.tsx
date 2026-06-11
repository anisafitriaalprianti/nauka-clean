'use client';

export default function Page() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.glow} />

      <div style={styles.content}>
        <div style={styles.logoWrap}>
          <img
            src="/file_00000000aa1471fab057b72e1ac28d6b.png"
            alt="logo"
            style={styles.logo}
          />
        </div>

        <p style={styles.subtitle}>
          Sebuah ruang kecil untuk mengantar momen
        </p>

        {/* FIX BUTTON */}
        <button style={styles.button}>
          Mulai
        </button>

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

    /* 🌙 NEW NAUKA COLOR (lebih soft, bukan hitam pekat) */
    background:
      'radial-gradient(circle at top left, #0e0f14, #07070a 60%, #050507)',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
    padding: '24px',
  },

  glow: {
    position: 'absolute',
    width: '700px',
    height: '700px',

    /* ✨ glow dibuat lebih warm & soft */
    background:
      'radial-gradient(circle, rgba(255,255,255,0.08), transparent 65%)',

    top: '-260px',
    left: '-260px',
    filter: 'blur(80px)',
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
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    boxShadow: '0 0 80px rgba(255,255,255,0.12)',
    backdropFilter: 'blur(14px)',
  },

  logo: {
    width: '150px',
    height: '150px',
    objectFit: 'contain',
  },

  subtitle: {
    fontSize: '14px',
    opacity: 0.75,
    maxWidth: '280px',
    lineHeight: '1.6',
  },

  /* 🔘 FIX BUTTON TEXT + FEEL */
  button: {
    marginTop: '14px',
    padding: '10px 28px',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.18)',
    background: 'rgba(255,255,255,0.06)',
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

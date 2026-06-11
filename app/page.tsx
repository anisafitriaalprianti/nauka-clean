'use client';

export default function Page() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.grain} />
      <div style={styles.blob1} />
      <div style={styles.blob2} />

      <div style={styles.content}>
        {/* LOGO (NO CIRCLE WRAP) */}
        <img
          src="/file_00000000aa1471fab057b72e1ac28d6b.png"
          alt="logo"
          style={styles.logo}
        />

        <p style={styles.subtitle}>
          Sebuah ruang kecil untuk mengantar momen
        </p>

        <button style={styles.button}>Mulai</button>

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
    position: 'relative',
    overflow: 'hidden',
    padding: '24px',

    /* 🌿 GLOBAL CANVAS FIX */
    background: 'linear-gradient(135deg, #FAF7F2, #E8DDCF)',
    color: '#2a2a2a',
  },

  content: {
    textAlign: 'center',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
  },

  /* ❌ NO CIRCLE WRAP ANYMORE */
  logo: {
    width: '150px',
    height: '150px',
    objectFit: 'contain',
    filter: 'contrast(1.05) brightness(1.05)',
  },

  subtitle: {
    fontSize: '14px',
    opacity: 0.75,
    maxWidth: '280px',
    lineHeight: '1.6',
    color: '#3a3a3a',
  },

  button: {
    marginTop: '14px',
    padding: '10px 28px',
    borderRadius: '999px',
    border: '1px solid rgba(0,0,0,0.15)',
    background: 'rgba(255,255,255,0.5)',
    color: '#2a2a2a',
    fontSize: '13px',
    letterSpacing: '1px',
    cursor: 'pointer',
  },

  signature: {
    marginTop: '10px',
    fontSize: '12px',
    opacity: 0.5,
    color: '#3a3a3a',
  },

  /* 🌫️ PAPER GRAIN */
  grain: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
    opacity: 0.25,
    pointerEvents: 'none',
  },

  /* 🌿 FLOATING BLUR SHAPES */
  blob1: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    background: 'rgba(255,255,255,0.35)',
    filter: 'blur(80px)',
    top: '-100px',
    left: '-120px',
    borderRadius: '50%',
  },

  blob2: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    background: 'rgba(200,180,160,0.25)',
    filter: 'blur(100px)',
    bottom: '-180px',
    right: '-150px',
    borderRadius: '50%',
  },
};

'use client';

export default function Page() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.grain} />

      {/* 🌿 CORNER ORNAMENTS */}
      <div style={{ ...styles.corner, ...styles.topLeft }}>
        <svg viewBox="0 0 100 100" style={styles.svg}>
          <path d="M10,90 C40,10 60,10 90,90" />
        </svg>
      </div>

      <div style={{ ...styles.corner, ...styles.topRight }}>
        <svg viewBox="0 0 100 100" style={styles.svg}>
          <path d="M10,90 C40,10 60,10 90,90" />
        </svg>
      </div>

      <div style={{ ...styles.corner, ...styles.bottomLeft }}>
        <svg viewBox="0 0 100 100" style={styles.svg}>
          <path d="M10,90 C40,10 60,10 90,90" />
        </svg>
      </div>

      <div style={{ ...styles.corner, ...styles.bottomRight }}>
        <svg viewBox="0 0 100 100" style={styles.svg}>
          <path d="M10,90 C40,10 60,10 90,90" />
        </svg>
      </div>

      {/* FLOATING BLURS */}
      <div style={styles.blob1} />
      <div style={styles.blob2} />

      {/* CONTENT */}
      <div style={styles.content}>
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

    background: 'linear-gradient(135deg, #FAF7F2, #E8DDCF)',
    color: '#2a2a2a',
  },

  content: {
    textAlign: 'center',
    zIndex: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
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

  button: {
    marginTop: '14px',
    padding: '10px 28px',
    borderRadius: '999px',
    border: '1px solid rgba(0,0,0,0.15)',
    background: 'rgba(255,255,255,0.55)',
    color: '#2a2a2a',
    fontSize: '13px',
    letterSpacing: '1px',
    cursor: 'pointer',
  },

  signature: {
    marginTop: '10px',
    fontSize: '12px',
    opacity: 0.5,
  },

  /* 🌫️ GRAIN */
  grain: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
    opacity: 0.2,
    pointerEvents: 'none',
  },

  /* 🌿 FLOATING BLURS */
  blob1: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    background: 'rgba(255,255,255,0.35)',
    filter: 'blur(90px)',
    top: '-120px',
    left: '-120px',
    borderRadius: '50%',
  },

  blob2: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    background: 'rgba(200,180,160,0.25)',
    filter: 'blur(110px)',
    bottom: '-180px',
    right: '-150px',
    borderRadius: '50%',
  },

  /* 🌿 CORNER ORNAMENT BASE */
  corner: {
    position: 'absolute',
    width: '120px',
    height: '120px',
    opacity: 0.35,
  },

  topLeft: { top: 0, left: 0 },
  topRight: { top: 0, right: 0, transform: 'rotate(90deg)' },
  bottomLeft: { bottom: 0, left: 0, transform: 'rotate(-90deg)' },
  bottomRight: { bottom: 0, right: 0, transform: 'rotate(180deg)' },

  svg: {
    width: '100%',
    height: '100%',
    stroke: '#6b5b4b',
    strokeWidth: 1.2,
    fill: 'none',
  },
};

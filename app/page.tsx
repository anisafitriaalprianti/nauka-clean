'use client';

export default function Page() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.grain} />

      <div style={styles.content}>
        {/* BRAND UNIT (LOGO + TEXT NYATU) */}
        <div style={styles.brandBlock}>
          <img
            src="/file_00000000aa1471fab057b72e1ac28d6b.png"
            alt="logo"
            style={styles.logo}
          />

          <p style={styles.subtitle}>
            Sebuah ruang kecil untuk mengantar momen
          </p>
        </div>

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
  /* 🌿 CANVAS */
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

  /* 🌿 GLOBAL CONTENT */
  content: {
    textAlign: 'center',
    zIndex: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    gap: '6px',
    lineHeight: 1, // 🔥 HAPUS ruang vertikal aneh
  },

  /* 🌿 BRAND UNIT (INI KUNCI JARAK FIX) */
  brandBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    gap: '2px', // 🔥 super rapat
    marginBottom: '6px',
  },

  /* 🌿 LOGO (HAPUS RUANG BAWAH) */
  logo: {
    width: '150px',
    height: '150px',
    objectFit: 'contain',

    display: 'block', // 🔥 FIX RUANG INLINE
    margin: 0,
    padding: 0,
  },

  /* 🌿 TEXT */
  subtitle: {
    margin: 0,
    padding: 0,

    fontSize: '14px',
    opacity: 0.75,
    maxWidth: '280px',
    lineHeight: '1.6',
  },

  /* 🔘 BUTTON TRANSPARENT */
  button: {
    marginTop: '8px',
    padding: '10px 28px',
    borderRadius: '999px',

    border: '1px solid rgba(0,0,0,0.15)',
    background: 'transparent',

    color: '#2a2a2a',
    fontSize: '13px',
    letterSpacing: '1px',
    cursor: 'pointer',
  },

  signature: {
    marginTop: '6px',
    fontSize: '12px',
    opacity: 0.5,
  },

  /* 🌫️ GRAIN */
  grain: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
    opacity: 0.18,
    pointerEvents: 'none',
  },
};

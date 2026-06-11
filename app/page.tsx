'use client';

export default function Page() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.content}>
        {/* LOGO (CLEAN VERSION) */}
        <div style={styles.logoWrap}>
          <img
            src="/file_00000000aa1471fab057b72e1ac28d6b.png"
            alt="NAUKA Logo"
            style={styles.logo}
          />
        </div>

        {/* TEXT */}
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
  /* 🌿 CLEAN CANVAS */
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: 'linear-gradient(135deg, #FAF7F2, #E8DDCF)',
    color: '#2a2a2a',

    padding: '24px',
  },

  /* 🌿 MAIN UNIT (LOGO + TEXT = 1 ENTITY) */
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    textAlign: 'center',

    gap: '6px', // 🔥 rapat tapi masih breathable
    lineHeight: 1,
  },

  /* 🌿 LOGO WRAP (NO GHOST SPACE PROTECTION) */
  logoWrap: {
    width: '140px',
    height: '140px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* 🌿 CLEAN LOGO */
  logo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',

    display: 'block', // 🔥 penting biar gak ada baseline gap
  },

  subtitle: {
    margin: 0,
    fontSize: '14px',
    opacity: 0.75,
    maxWidth: '280px',
    lineHeight: '1.6',
  },

  /* 🔘 TRANSPARENT BUTTON */
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
};

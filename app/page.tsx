'use client';

export default function Page() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.content}>
        {/* LOGO SAFE (PAKAI FILE APA ADANYA) */}
        <img
          src="/Tak%20berjudul61_20260611085511.png"
          alt="NAUKA Logo"
          style={styles.logo}
          onError={(e) => {
            // fallback kalau file gagal load
            e.currentTarget.style.display = 'none';
          }}
        />

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
  /* 🌿 BACKGROUND NAUKA */
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: 'linear-gradient(135deg, #FAF7F2, #E8DDCF)',
    color: '#2a2a2a',

    padding: '24px',
  },

  /* 🌿 CENTER UNIT */
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    textAlign: 'center',

    gap: '6px',
    lineHeight: 1,
  },

  /* 🌿 LOGO SAFE AREA */
  logo: {
    width: '132px',
    height: '132px',

    objectFit: 'contain',
    display: 'block',
  },

  subtitle: {
    margin: 0,
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
};

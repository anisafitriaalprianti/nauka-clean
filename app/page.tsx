'use client';

export default function Hero() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FAF9F7',
        padding: '0 20px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 420 }}>
        
        {/* LOGO */}
        <div
          style={{
            fontSize: 18,
            letterSpacing: 2,
            color: '#2C2A28',
            marginBottom: 14,
            fontWeight: 500,
          }}
        >
          NAUKA
        </div>

        {/* LINE */}
        <div
          style={{
            width: 72,
            height: 2,
            background: '#2C2A28',
            opacity: 0.25,
            margin: '0 auto 18px auto',
          }}
        />

        {/* TITLE */}
        <h1
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: '#2C2A28',
            lineHeight: 1.3,
            marginBottom: 12,
          }}
        >
          Sebuah ruang kecil untuk mengantar momen
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: 14,
            color: 'rgba(44,42,40,0.65)',
            lineHeight: 1.6,
          }}
        >
          Undangan digital yang sederhana, tenang, dan penuh makna.
        </p>

      </div>
    </main>
  );
}

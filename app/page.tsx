'use client';

export default function Hero() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #FAF7F2 0%, #E8DDCF 100%)',
        padding: '0 24px',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: 420,
          width: '100%',
        }}
      >

        {/* LOGO (bagian dari satu kesatuan hero) */}
        <div style={{ marginBottom: 26 }}>
          <div
            style={{
              fontSize: 15,
              letterSpacing: 3,
              color: '#2C2A28',
              fontWeight: 500,
            }}
          >
            NAUKA
          </div>
        </div>

        {/* CONNECTOR */}
        <div
          style={{
            width: 64,
            height: 1,
            background: 'rgba(44,42,40,0.12)',
            margin: '0 auto 26px auto',
          }}
        />

        {/* HERO TEXT BLOCK */}
        <div style={{ marginBottom: 28 }}>
          <h1
            style={{
              fontSize: 26,
              fontWeight: 500,
              color: '#2C2A28',
              lineHeight: 1.4,
              marginBottom: 12,
            }}
          >
            Sebuah ruang kecil untuk mengantar momen
          </h1>

          <p
            style={{
              fontSize: 14,
              color: 'rgba(44,42,40,0.65)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Undangan digital yang sederhana, tenang, dan penuh makna.
          </p>
        </div>

        {/* BUTTON */}
        <button
          style={{
            padding: '11px 20px',
            borderRadius: 999,
            background: '#2C2A28',
            color: '#fff',
            fontSize: 13,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Buka Undangan
        </button>

      </div>
    </main>
  );
}

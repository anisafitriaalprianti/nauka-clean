'use client';

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0b0f1a',
        gap: '18px',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      {/* LOGO (SAFE IMG, NO NEXT IMAGE) */}
      <img
        src="/file_0000000077687209b2adc5b443052e18.png"
        alt="NAUKA logo"
        style={{
          width: 150,
          height: 150,
          objectFit: 'contain',
          display: 'block',
        }}
      />

      {/* BRAND */}
      <h1
        style={{
          fontSize: '28px',
          fontWeight: 500,
          color: '#ffffff',
          letterSpacing: '2px',
          margin: 0,
        }}
      >
        NAUKA
      </h1>

      {/* TAGLINE */}
      <p
        style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.6)',
          maxWidth: '320px',
          lineHeight: '1.6',
          margin: 0,
        }}
      >
        “Sebuah ruang kecil untuk mengantar momen”
      </p>
    </main>

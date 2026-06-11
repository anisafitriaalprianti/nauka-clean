export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0b0f1a',
        position: 'relative',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* DEBUG LAYER (biar kita lihat pasti render) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255,0,0,0.05)',
          zIndex: 0,
        }}
      />

      {/* LOGO */}
      <img
        src="/file_0000000077687209b2adc5b443052e18.png"
        alt="NAUKA logo"
        style={{
          width: 160,
          height: 160,
          objectFit: 'contain',
          zIndex: 2,
        }}
      />

      {/* TEXT */}
      <h1 style={{ color: 'white', zIndex: 2, margin: 0 }}>
        NAUKA
      </h1>

      <p style={{ color: 'rgba(255,255,255,0.6)', zIndex: 2, margin: 0 }}>
        “Sebuah ruang kecil untuk mengantar momen”
      </p>
    </main>
  );
}

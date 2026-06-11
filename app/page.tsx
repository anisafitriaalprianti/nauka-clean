export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0b0f1a',
        gap: '16px',
      }}
    >
      <img
        src="/file_0000000077687209b2adc5b443052e18.png"
        alt="NAUKA logo"
        style={{ width: 160, height: 160, objectFit: 'contain' }}
      />

      <h1 style={{ color: 'white', margin: 0 }}>NAUKA</h1>

      <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>
        “Sebuah ruang kecil untuk mengantar momen”
      </p>
    </div>
  );
}

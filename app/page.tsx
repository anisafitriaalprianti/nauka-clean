export default function Hero() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FAF9F7',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 18, marginBottom: 12 }}>
          NAUKA
        </div>

        <div
          style={{
            width: 72,
            height: 1,
            background: '#2C2A28',
            opacity: 0.2,
            margin: '0 auto 18px auto',
          }}
        />

        <h1 style={{ fontSize: 28, marginBottom: 10 }}>
          Sebuah ruang kecil untuk mengantar momen
        </h1>

        <p style={{ fontSize: 14, opacity: 0.6 }}>
          Undangan digital yang sederhana, tenang, dan penuh makna.
        </p>
      </div>
    </main>
  );
}

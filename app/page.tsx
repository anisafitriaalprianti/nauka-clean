export default function Home() {
  return (
    <div style={{ color: 'red', fontSize: 30, zIndex: 99999 }}>
  NAUKA TEST BERHASIL
</div>
export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      {/* 🔴 JANGAN SENTUH BACKGROUND KAMU DI SINI */}
      
      {/* LOGO FIX (FORCE RENDER + ON TOP) */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        <img
          src="/file_0000000077687209b2adc5b443052e18.png"
          alt="NAUKA logo"
          style={{
            width: 160,
            height: 160,
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      {/* KONTEN ASLI KAMU TETAP DI SINI */}
      <div>
        {/* semua layout / background / hero kamu biarin tetap */}
      </div>
    </main>
  );
}

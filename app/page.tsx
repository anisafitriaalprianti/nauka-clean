'use client';

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #FAF7F2 0%, #E8DDCF 100%)",
        color: "#2C2A28",
        fontFamily: "serif",
        textAlign: "center",
        padding: "24px",
      }}
    >
      {/* OUTER WRAPPER */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "380px",
        }}
      >
        
        {/* 🪶 HERO CORE (INI KUNCI UTAMA) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <img
            src="https://i.ibb.co/k2PgCXBf/1001653701-removebg-preview.png"
            alt="Nauka Logo"
            style={{
              width: "250px",
              height: "auto",
            }}
          />

          <h1
            style={{
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "1.4",
              margin: 0,
            }}
          >
            Sebuah ruang kecil untuk mengantar momen
          </h1>
        </div>

        {/* 🪶 SUPPORT LAYER */}
        <div
          style={{
            marginTop: "14px",
            maxWidth: "300px",
          }}
        >
          <p
            style={{
              fontSize: "13.5px",
              lineHeight: "1.7",
              opacity: 0.75,
              margin: 0,
            }}
          >
            Ruang digital yang menjaga momen tetap sederhana, tenang, dan bermakna
          </p>
        </div>

        {/* 🪶 ACTION LAYER */}
        <div style={{ marginTop: "22px" }}>
          <button
            style={{
              padding: "12px 22px",
              borderRadius: "14px",
              border: "1px solid rgba(44,42,40,0.25)",
              background: "transparent",
              color: "#2C2A28",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Mulai
          </button>
        </div>

      </div>
    </main>
  );
}
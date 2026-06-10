'use client';

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #FAF7F2 0%, #E8DDCF 100%)",
        color: "#2C2A28",
        fontFamily: "serif",
        textAlign: "center",
        padding: "24px",
        position: "relative",
      }}
    >
      {/* 🔥 VISUAL ANCHOR (INI YANG BIKIN ATAS GAK KOSONG LAGI) */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          width: "120px",
          height: "1px",
          background: "rgba(44, 42, 40, 0.08)",
        }}
      />

      {/* HERO CORE */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "380px",
          transform: "translateY(-1%)",
        }}
      >
        {/* LOGO */}
        <img
          src="https://i.ibb.co/k2PgCXBf/1001653701-removebg-preview.png"
          alt="Nauka Logo"
          style={{
            width: "260px",
            height: "auto",
            marginBottom: "28px",
          }}
        />

        {/* HEADLINE */}
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 600,
            lineHeight: "1.2",
            letterSpacing: "-0.6px",
            margin: 0,
          }}
        >
          Sebuah ruang kecil untuk mengantar momen
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            marginTop: "22px",
            fontSize: "17px",
            lineHeight: "1.75",
            opacity: 0.8,
            maxWidth: "340px",
          }}
        >
          Ruang digital yang menjaga momen tetap sederhana, tenang, dan bermakna
        </p>

        {/* CTA */}
        <div style={{ marginTop: "40px" }}>
          <button
            style={{
              padding: "14px 28px",
              borderRadius: "999px",
              border: "1px solid rgba(44, 42, 40, 0.22)",
              background: "rgba(44, 42, 40, 0.06)",
              color: "#2C2A28",
              fontSize: "15px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Mulai perjalanan
          </button>
        </div>
      </div>
    </main>
  );
}
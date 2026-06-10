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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "380px",
        }}
      >
        {/* 🌙 LOGO (dibuat lebih “soft presence”) */}
        <img
          src="https://i.ibb.co/k2PgCXBf/1001653701-removebg-preview.png"
          alt="Nauka Logo"
          style={{
            width: "240px",
            height: "auto",
            opacity: 0.95,
            marginBottom: "6px",
          }}
        />

        {/* 🌙 VISUAL BRIDGE (INI KUNCI DREAMY FEEL) */}
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(44,42,40,0.25)",
            margin: "6px 0 10px 0",
          }}
        />

        {/* 🌙 HEADLINE */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "1.5",
            margin: 0,
            letterSpacing: "-0.2px",
          }}
        >
          Sebuah ruang kecil untuk mengantar momen
        </h1>

        {/* 🌙 SUBTEXT */}
        <p
          style={{
            fontSize: "13.5px",
            lineHeight: "1.7",
            opacity: 0.75,
            margin: "14px 0 0 0",
            maxWidth: "300px",
          }}
        >
          Ruang digital yang menjaga momen tetap sederhana, tenang, dan bermakna
        </p>

        {/* 🌙 BUTTON (dibuat lebih “calm”, bukan bold banget) */}
        <button
          style={{
            marginTop: "20px",
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
    </main>
  );
}
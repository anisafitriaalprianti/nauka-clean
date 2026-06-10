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
      }}
    >
      {/* 🔳 1 KESATUAN UTUH HERO BLOCK */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "380px",
          gap: "18px", // overall rhythm
        }}
      >
        {/* LOGO */}
        <img
          src="https://i.ibb.co/k2PgCXBf/1001653701-removebg-preview.png"
          alt="Nauka Logo"
          style={{
            width: "250px",
            height: "auto",
            marginBottom: "6px", // 🔥 dipersempit biar nempel ke headline
          }}
        />

        {/* HEADLINE */}
        <h1
          style={{
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "1.25",
            letterSpacing: "-0.6px",
            margin: 0,
          }}
        >
          Sebuah ruang kecil untuk mengantar momen
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: "16.5px",
            lineHeight: "1.7",
            opacity: 0.8,
            margin: 0,
            maxWidth: "340px",
          }}
        >
          Ruang digital yang menjaga momen tetap sederhana, tenang, dan bermakna
        </p>

        {/* CTA */}
        <button
          style={{
            marginTop: "8px",
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
    </main>
  );
}
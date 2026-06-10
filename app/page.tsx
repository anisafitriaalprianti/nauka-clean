'use client';

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #FAF7F2 0%, #E8DDCF 100%)",
        color: "#2C2A28",
        fontFamily: "serif",
        textAlign: "center",
        padding: "24px",
        transform: "translateY(-1%)",
      }}
    >
      {/* CORE CONTENT */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "360px",
        }}
      >
        {/* LOGO */}
        <img
          src="https://i.ibb.co/k2PgCXBf/1001653701-removebg-preview.png"
          alt="Nauka Logo"
          style={{
            width: "240px",
            height: "auto",
            marginBottom: "28px",
          }}
        />

        {/* HEADLINE */}
        <h1
          style={{
            fontSize: "38px",
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
            marginTop: "20px",
            fontSize: "16px",
            lineHeight: "1.7",
            opacity: 0.78,
          }}
        >
          Ruang digital yang menjaga momen tetap sederhana, tenang, dan bermakna
        </p>
      </div>

      {/* CTA (LIGHT WEIGHT — TIDAK NARIK VISUAL KE BAWAH) */}
      <div style={{ marginTop: "42px" }}>
        <button
          style={{
            padding: "12px 26px",
            borderRadius: "999px",
            border: "1px solid rgba(44, 42, 40, 0.25)",
            background: "transparent",
            color: "#2C2A28",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
            opacity: 0.85,
          }}
        >
          Mulai perjalanan
        </button>
      </div>
    </main>
  );
}
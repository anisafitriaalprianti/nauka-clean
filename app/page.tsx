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
      }}
    >
      {/* HERO CONTENT (CENTER TRUE BALANCE AREA) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "360px",
          marginBottom: "48px",
        }}
      >
        {/* LOGO */}
        <div style={{ marginBottom: "28px" }}>
          <img
            src="https://i.ibb.co/k2PgCXBf/1001653701-removebg-preview.png"
            alt="Nauka Logo"
            style={{
              width: "220px",
              height: "auto",
            }}
          />
        </div>

        {/* HEADLINE */}
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 500,
            lineHeight: "1.3",
            letterSpacing: "-0.5px",
            margin: 0,
          }}
        >
          Sebuah ruang kecil untuk mengantar momen
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            marginTop: "18px",
            fontSize: "14px",
            lineHeight: "1.6",
            opacity: 0.75,
          }}
        >
          Ruang digital yang menjaga momen tetap sederhana, tenang, dan bermakna
        </p>
      </div>

      {/* CTA (SEPARATE WEIGHT — NOT PART OF CENTER BLOCK) */}
      <button
        style={{
          padding: "12px 22px",
          borderRadius: "14px",
          border: "none",
          background: "#2C2A28",
          color: "#FAF7F2",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Mulai
      </button>
    </main>
  );
}
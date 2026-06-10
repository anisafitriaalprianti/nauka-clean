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
        overflow: "hidden",
      }}
    >
      {/* 🌙 ORNAMENT HALUS (BACKGROUND FEEL, BUKAN DEKOR RAMAI) */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "220px",
          height: "220px",
          background: "radial-gradient(circle, rgba(44,42,40,0.06), transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "260px",
          height: "260px",
          background: "radial-gradient(circle, rgba(44,42,40,0.05), transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* CORE */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "380px",
          transform: "translateY(-2%)",
          zIndex: 2,
        }}
      >
        {/* LOGO */}
        <img
          src="https://i.ibb.co/k2PgCXBf/1001653701-removebg-preview.png"
          alt="Nauka Logo"
          style={{
            width: "250px",
            height: "auto",
            marginBottom: "26px",
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
            marginTop: "20px",
            fontSize: "16.5px",
            lineHeight: "1.75",
            opacity: 0.8,
            maxWidth: "340px",
          }}
        >
          Ruang digital yang menjaga momen tetap sederhana, tenang, dan bermakna
        </p>

        {/* CTA */}
        <div style={{ marginTop: "42px" }}>
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
              backdropFilter: "blur(6px)",
            }}
          >
            Mulai perjalanan
          </button>
        </div>
      </div>
    </main>
  );
}
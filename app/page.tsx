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
      {/* HERO WRAPPER (dibikin lebih “ketarik ke atas center feel”) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "380px",
          transform: "translateY(-12px)", // 🔥 kecil tapi ngunci center
        }}
      >
        {/* LOGO + HEADLINE = 1 UNIT VISUAL */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px", // 🔥 ini yang bikin “nyatu”
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

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: "13.5px",
            lineHeight: "1.6",
            opacity: 0.75,
            margin: "16px 0 0 0",
            maxWidth: "320px",
          }}
        >
          Ruang digital yang menjaga momen tetap sederhana, tenang, dan bermakna
        </p>

        {/* CTA */}
        <button
          style={{
            marginTop: "20px",
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
      </div>
    </main>
  );
}
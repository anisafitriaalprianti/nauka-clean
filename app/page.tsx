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
      {/* 🔥 NARROW IDENTITY COLUMN (BIAR TIDAK TERASA “TERPISAH”) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "320px",

          // penting: bukan gap besar, tapi rhythm kecil
          gap: "10px",
        }}
      >

        {/* 🔥 LOGO DIPERLAKUKAN SEBAGAI MARK (BUKAN HEADER) */}
        <img
          src="https://i.postimg.cc/yN1cmGR9/file-00000000aa1471fab057b72e1ac28d6b.png"
          alt="Nauka Logo"
          style={{
            width: "160px", // 🔥 diturunkan agar tidak “berkuasa sendiri”
            height: "auto",
            display: "block",
            opacity: 0.92,
          }}
        />

        {/* 🔥 TYPOGRAPHY BLOCK (INI YANG JADI FOKUS UTAMA) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <h1
            style={{
              fontSize: "19px",
              fontWeight: 500,
              lineHeight: "1.25",
              margin: 0,
            }}
          >
            Sebuah ruang kecil untuk mengantar momen
          </h1>

          <p
            style={{
              fontSize: "13.5px",
              lineHeight: "1.5",
              opacity: 0.75,
              margin: 0,
            }}
          >
            Ruang digital yang menjaga momen tetap sederhana, tenang, dan bermakna
          </p>
        </div>

        {/* BUTTON */}
        <button
          style={{
            marginTop: "4px",
            padding: "12px 24px",
            borderRadius: "16px",
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

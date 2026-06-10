            'use client';

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",

        // 🔥 lebih naik lagi dari sebelumnya
        alignItems: "flex-start",
        paddingTop: "4vh",

        background: "linear-gradient(180deg, #FAF7F2 0%, #E8DDCF 100%)",
        color: "#2C2A28",
        fontFamily: "serif",
        textAlign: "center",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          // 🔥 ini yang bikin semua “nempel jadi satu rasa”
          gap: "2px",
        }}
      >

        {/* LOGO */}
        <img
          src="https://i.postimg.cc/yN1cmGR9/file-00000000aa1471fab057b72e1ac28d6b.png"
          alt="Nauka Logo"
          style={{
            width: "170px",
            height: "auto",
            display: "block",
          }}
        />

        {/* 🔥 GROUP TEKS + BUTTON (ditarik lebih dekat ke logo) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            // INI KUNCI UTAMA
            marginTop: "0px",
          }}
        >

          <h1
            style={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "1.35",
              margin: 0,
            }}
          >
            Sebuah ruang kecil untuk mengantar momen
          </h1>

          <p
            style={{
              fontSize: "13.5px",
              lineHeight: "1.6",
              opacity: 0.75,
              margin: "4px 0 0 0",
              maxWidth: "300px",
            }}
          >
            Ruang digital yang menjaga momen tetap sederhana, tenang, dan bermakna
          </p>

          <button
            style={{
              marginTop: "10px",
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

      </div>
    </main>
  );
}

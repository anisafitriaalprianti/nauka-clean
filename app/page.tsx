'use client';

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",

        // 🔥 optical center (ini penting)
        alignItems: "flex-start",
        paddingTop: "14vh",

        background: "linear-gradient(180deg, #FAF7F2 0%, #E8DDCF 100%)",
        color: "#2C2A28",
        fontFamily: "serif",
        textAlign: "center",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* 🔥 “IMAGINARY CARD” = semua dianggap 1 objek */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          // ini bikin rasa “nyatu”
          paddingTop: "6px",
          paddingBottom: "6px",
        }}
      >

        {/* LOGO (anchor visual) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            // 🔥 kasih rasa “berat lembut”
            marginBottom: "2px",
          }}
        >
          <img
            src="https://i.postimg.cc/yN1cmGR9/file-00000000aa1471fab057b72e1ac28d6b.png"
            alt="Nauka Logo"
            style={{
              width: "170px",
              height: "auto",
              display: "block",

              // subtle anchor (bukan efek rusak)
              filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.08))",
            }}
          />
        </div>

        {/* TEXT BLOCK (dibuat 1 napas) */}
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
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "1.35",
              margin: 0,

              // 🔥 ini kunci “tidak terasa mulai baru”
              letterSpacing: "0.2px",
            }}
          >
            Sebuah ruang kecil untuk mengantar momen
          </h1>

          <p
            style={{
              fontSize: "13.5px",
              lineHeight: "1.6",
              opacity: 0.75,
              margin: 0,
              maxWidth: "300px",
            }}
          >
            Ruang digital yang menjaga momen tetap sederhana, tenang, dan bermakna
          </p>
        </div>

        {/* BUTTON */}
        <button
          style={{
            marginTop: "16px",
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

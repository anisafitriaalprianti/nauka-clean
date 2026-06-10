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
      {/* 🔥 OUTER CONTAINER (GLOBAL SPACING) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          // jarak antar SECTION
          gap: "14px",
        }}
      >

        {/* 🔥 GROUP 1: LOGO + HEADLINE (HARUS DEKAT) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            // INI KUNCI NYATU
            gap: "6px",
          }}
        >
          <img
            src="https://i.postimg.cc/yN1cmGR9/file-00000000aa1471fab057b72e1ac28d6b.png"
            alt="Nauka Logo"
            style={{
              width: "240px",
              height: "auto",
              display: "block",
            }}
          />

          <h1
            style={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "1.25",
              margin: 0,
            }}
          >
            Sebuah ruang kecil untuk mengantar momen
          </h1>
        </div>

        {/* 🔥 GROUP 2: SUBTEXT */}
        <p
          style={{
            fontSize: "13.5px",
            lineHeight: "1.5",
            opacity

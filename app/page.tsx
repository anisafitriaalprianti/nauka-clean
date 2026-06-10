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

        {/* LOGO (PAKAI LINK IMGBB YANG SUDAH DI-REPAIR) */}
        <img
          src="https://i.ibb.co/pjRLN4H4/file-00000000aa1471fab057b72e1ac28d6b.png"
          alt="Nauka Logo"
          style={{
            width: "200px",
            height: "auto",
            display: "block",
          }}
        />

        {/* HEADLINE */}
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 500,
            lineHeight: "1.5",
            margin: "12px 0 0 0",
          }}
        >
          Sebuah ruang kecil untuk mengantar momen
        </h1>

        {/* SUBTEXT */}
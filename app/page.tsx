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
      {/* HERO BLOCK */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "380px",
          gap: "18px",
        }}
      >
        {/* LOGO */}
        <img
          src="https://i.ibb.co/k2PgCXBf/1001653701-removebg-preview.png"
          alt="Nauka Logo"
          style={{
            width: "250px",
            height: "auto",
            marginBottom: "14px", // 🔥 fix jarak saja
          }}
        />

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
            fontSize: "14px",
            lineHeight: "1.6",
            opacity: 0.75,
            margin: 0,
            maxWidth: "320px",
          }}
        >
          Ruang
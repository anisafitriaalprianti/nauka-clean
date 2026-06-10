'use client'

import { useState } from "react"

export default function Home() {
  const [theme, setTheme] = useState("warm")
  const [sound, setSound] = useState(false)

  const themes: any = {
    warm: "#F6F1EA",
    night: "#1C1C1C",
    green: "#E9F5EC"
  }

  const textColor = theme === "night" ? "#F5F5F5" : "#222"

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: themes[theme],
      color: textColor,
      fontFamily: "serif",
      textAlign: "center",
      padding: "24px",
      transition: "0.4s"
    }}>

     <img
  src="https://i.ibb.co/k2PgCXBf/1001653701-removebg-preview.png"
  alt="Nauka Logo"
  style={{
  width: "260px",
  height: "auto",
  marginBottom: "28px",
  transition: "0.3s ease"
}}
    
/>

      <p style={{
        marginTop: "12px",
        maxWidth: "320px",
        lineHeight: "1.6",
        fontSize: "16px"
      }}>
        Siap merasakan ketenangan di sebuah momen?
      </p>

      {/* Theme Selector */}
      <div style={{ marginTop: "24px", display: "flex", gap: "8px" }}>
        <button onClick={() => setTheme("warm")}>Warm</button>
        <button onClick={() => setTheme("night")}>Night</button>
        <button onClick={() => setTheme("green")}>Nature</button>
      </div>

      {/* Sound Toggle */}
      <button
        onClick={() => setSound(!sound)}
        style={{
          marginTop: "16px",
          padding: "8px 16px",
          borderRadius: "20px",
          border: "1px solid #999",
          background: "transparent"
        }}
      >
        {sound ? "Sound ON 🔊" : "Sound OFF 🔇"}
      </button>

      <a href="/undangan">
  <button style={{
    marginTop: "28px",
    padding: "12px 26px",
    borderRadius: "999px",
    border: "1px solid currentColor",
    background: "transparent",
    cursor: "pointer"
  }}>
    Buka Undangan
  </button>
</a>
</main>
  )
}

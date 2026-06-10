export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#F6F1EA",
      fontFamily: "serif",
      textAlign: "center",
      padding: "24px"
    }}>

      <h1 style={{
        fontSize: "40px",
        letterSpacing: "10px",
        fontWeight: 300
      }}>
        NAUKA
      </h1>

      <p style={{
        marginTop: "14px",
        fontSize: "18px",
        maxWidth: "320px",
        color: "#333",
        lineHeight: "1.6"
      }}>
        Sebuah ruang kecil untuk sebuah momen yang ingin dikenang dengan tenang
      </p>

      <button style={{
        marginTop: "28px",
        padding: "12px 28px",
        borderRadius: "999px",
        border: "1px solid #333",
        background: "transparent",
        cursor: "pointer"
      }}>
        Masuk
      </button>

    </main>
  )
}
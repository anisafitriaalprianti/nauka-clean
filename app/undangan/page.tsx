export default function Undangan() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#F7F2EC",
      padding: "24px",
      fontFamily: "serif",
      color: "#1C1C1C"
    }}>

      <div style={{
        maxWidth: "420px",
        width: "100%",
        background: "#fff",
        padding: "32px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        textAlign: "center"
      }}>

        <p style={{
          fontSize: "12px",
          letterSpacing: "4px",
          opacity: 0.6,
          marginBottom: "10px"
        }}>
          THE INVITATION
        </p>

        <h1 style={{
          fontSize: "30px",
          letterSpacing: "3px",
          marginBottom: "16px"
        }}>
          UNDANGAN NAUKA
        </h1>

        <p style={{
          fontSize: "14px",
          lineHeight: "1.8",
          opacity: 0.85,
          marginBottom: "24px"
        }}>
          Dengan penuh rasa syukur, kami mengundang kehadiran Anda
          dalam momen yang insyaAllah penuh keberkahan.
        </p>

        <div style={{
          borderTop: "1px solid #eee",
          paddingTop: "16px",
          marginBottom: "16px"
        }}>
          <p style={{ margin: "6px 0" }}>
            <b>Akad:</b> 10.00 WIB
          </p>
          <p style={{ margin: "6px 0" }}>
            <b>Resepsi:</b> 13.00 WIB
          </p>
          <p style={{ margin: "6px 0" }}>
            <b>Lokasi:</b> Akan diisi
          </p>
        </div>

        <p style={{
          fontStyle: "italic",
          fontSize: "13px",
          opacity: 0.7
        }}>
          Merupakan kehormatan bagi kami atas kehadiran Anda.
        </p>

      </div>
    </main>
  )
}
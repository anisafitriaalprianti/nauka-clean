export default function Undangan() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "32px",
      fontFamily: "serif",
      background: "#F7F2EC",
      color: "#1C1C1C"
    }}>

      {/* Header */}
      <div style={{
        fontSize: "12px",
        letterSpacing: "6px",
        opacity: 0.6,
        marginBottom: "12px"
      }}>
        THE WEDDING INVITATION
      </div>

      <h1 style={{
        fontSize: "34px",
        letterSpacing: "4px",
        marginBottom: "16px"
      }}>
        UNDANGAN NAUKA
      </h1>

      <p style={{
        maxWidth: "340px",
        lineHeight: "1.8",
        fontSize: "15px",
        opacity: 0.85,
        marginBottom: "28px"
      }}>
        Dengan penuh rasa syukur, kami mengundang kehadiran Anda
        dalam momen sakral yang insyaAllah penuh keberkahan.
      </p>

      {/* Detail acara */}
      <div style={{
        border: "1px solid rgba(0,0,0,0.1)",
        padding: "20px",
        borderRadius: "16px",
        maxWidth: "320px",
        width: "100%",
        marginBottom: "24px"
      }}>
        <p style={{ margin: "6px 0" }}><b>Akad:</b> 10.00 WIB</p>
        <p style={{ margin: "6px 0" }}><b>Resepsi:</b> 13.00 WIB</p>
        <p style={{ margin: "6px 0" }}><b>Lokasi:</b> (akan diisi)</p>
      </div>

      {/* Closing */}
      <p style={{
        fontStyle: "italic",
        opacity: 0.8,
        maxWidth: "300px",
        lineHeight: "1.7"
      }}>
        Merupakan suatu kehormatan bagi kami apabila Anda berkenan hadir.
      </p>

    </main>
  )
}
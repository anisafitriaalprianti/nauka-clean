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
        padding: "36px",
        borderRadius: "22px",
        boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
        textAlign: "center",
        animation: "fadeIn 0.8s ease"
      }}>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <p style={{
          fontSize: "12px",
          letterSpacing: "5px",
          opacity: 0.6,
          marginBottom: "12px"
        }}>
          THE WEDDING INVITATION
        </p>

        <h1 style={{
          fontSize: "30px",
          letterSpacing: "3px",
          marginBottom: "18px"
        }}>
          UNDANGAN NAUKA
        </h1>

        <div style={{
          marginBottom: "20px",
          padding: "12px 10px",
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee"
        }}>

          <p style={{
            fontSize: "12px",
            letterSpacing: "3px",
            opacity: 0.6,
            marginBottom: "10px"
          }}>
            KENAPA NAUKA
          </p>

          <p style={{
            fontSize: "13px",
            lineHeight: "1.8",
            opacity: 0.78,
            fontStyle: "italic"
          }}>
            “Nauka lahir dari ruang kecil yang ingin
            menjaga momen tetap sederhana dan bermakna.”
          </p>

        </div>

        <p style={{
          fontSize: "14px",
          lineHeight: "1.9",
          opacity: 0.85,
          marginBottom: "26px"
        }}>
          Dengan penuh rasa syukur, kami mengundang kehadiran Anda
          dalam momen yang insyaAllah penuh keberkahan.
        </p>

        <div style={{
          borderTop: "1px solid #eee",
          paddingTop: "18px",
          marginBottom: "18px"
        }}>
          <p style={{ margin: "6px 0" }}><b>Akad:</b> 10.00 WIB</p>
          <p style={{ margin: "6px 0" }}><b>Resepsi:</b> 13.00 WIB</p>
          <p style={{ margin: "6px 0" }}><b>Lokasi:</b> Akan diisi</p>
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
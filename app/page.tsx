export default function Page() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.glow} />

      <div style={styles.content}>
        <div style={styles.logoWrap}>
          <img
            src="/file_00000000aa1471fab057b72e1ac28d6b.png"
            style={styles.logo}
          />
        </div>

        <p style={styles.subtitle}>
          Sebuah ruang kecil untuk mengantar momen
        </p>

        <button style={styles.button}>
          Mulai
        </button>

        <div style={styles.signature}>
          “tenang, sederhana, bermakna”
        </div>
      </div>
    </main>
  );
}

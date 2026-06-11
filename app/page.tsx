'use client';

export default function Page() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.grain} />

      {/* 🌿 CORNER ORNAMENTS */}
      <div style={{ ...styles.corner, ...styles.topLeft }}>
        <svg viewBox="0 0 100 100" style={styles.svg}>
          <path d="M10,90 C40,10 60,10 90,90" />
        </svg>
      </div>

      <div style={{ ...styles.corner, ...styles.topRight }}>
        <svg viewBox="0 0 100 100" style={styles.svg}>
          <path d="M10,90 C40,10 60,10 90,90" />
        </svg>
      </div>

      <div style={{ ...styles.corner, ...styles.bottomLeft }}>
        <svg viewBox="0 0 100 100" style={styles.svg}>
          <path d="M10,90 C40,10 60,10 90,90" />
        </svg>
      </div>

      <div style={{ ...styles.corner, ...styles.bottomRight }}>
        <svg viewBox="0 0 100 100" style={styles.svg}>
          <path d="M10,90 C40,10 60,10 90,90" />
        </svg>
      </div>

      {/* 🌿 FLOATING BLUR */}
      <div style={styles.blob1} />
      <div style={styles.blob2} />

      {/* CONTENT */}
      <div style={styles.content}>
        <img
          src="/file_00000000aa1471fab057b72e1ac28d6b.png"
          alt="logo"
          style={

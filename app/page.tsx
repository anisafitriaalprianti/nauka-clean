'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0b0b0f',
        color: 'white',
        textAlign: 'center',
        padding: '24px',
      }}
    >
      {/* LOGO */}
      <div style={{ marginBottom: '20px' }}>
        <Image
          src="/file_00000000aa1471fab057b72e1ac28d6b.png"
          alt="NAUKA Logo"
          width={140}
          height={140}
          priority
        />
      </div>

      {/* TITLE */}
      <h1 style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '1px' }}>
        NAUKA
      </h1>

      {/* TAGLINE */}
      <p style={{ marginTop: '10px', opacity: 0.7, maxWidth: '320px' }}>
        Sebuah ruang kecil untuk mengantar momen
      </p>
    </main>
  );
}

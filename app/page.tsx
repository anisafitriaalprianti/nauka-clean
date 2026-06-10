'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FAF9F7',
        padding: '0 20px',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: 420,
        }}
      >
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 16,
            letterSpacing: 2,
            color: '#2C2A28',
            marginBottom: 12,
          }}
        >
          NAUKA
        </motion.div>

        {/* CONNECTOR LINE */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 72, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            height: 1,
            background: 'rgba(44, 42, 40, 0.10)',
            margin: '0 auto 18px auto',
          }}
        />

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: -0.2,
            color: '#2C2A28',
            marginBottom: 10,
            lineHeight: 1.3,
          }}
        >
          Sebuah ruang kecil untuk mengantar momen
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: 14,
            color: 'rgba(44, 42, 40, 0.65)',
            lineHeight: 1.6,
            marginBottom: 24,
          }}
        >
          Undangan digital yang sederhana, tenang, dan penuh makna.
        </motion.p>

        {/* BUTTON */}
        <motion.button
          initial

"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "4rem",
        background: "radial-gradient(circle, #111 0%, #050505 70%)"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div style={{ textAlign: "center", maxWidth: 900 }}>
          <p
            style={{
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#999"
            }}
          >
            Ouroboros
          </p>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              margin: "0.2em 0"
            }}
          >
            Every End
            <br />A New Beginning
          </h1>
          <p
            style={{
              color: "#b5b5b5",
              lineHeight: 1.8,
              maxWidth: 650,
              margin: "0 auto"
            }}
          >
            A minimalist exploration of transformation, discipline, and
            continuous evolution.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              marginTop: "2rem",
              display: "inline-block",
              border: "1px solid #555",
              padding: "1rem 2rem",
              borderRadius: 999
            }}
          >
            Enter the Cycle
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

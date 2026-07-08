"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { MotionProps } from "framer-motion";

const cards = [
  "Endings are not failures.",
  "The cycle rewards renewal.",
  "Renewal requires sacrifice.",
  "What returns must return transformed."
];

const cycle = [
  ["Destroy", "End what no longer carries the future."],
  ["Digest", "Extract the lesson without worshipping the pain."],
  ["Design", "Build the next form deliberately."],
  ["Return", "Re-enter the world with sharper standards."],
  ["Repeat", "The cycle continues until the identity is refined."],
  ["Become", "Every loop leaves a cleaner silhouette."]
];

function OuroborosMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} aria-hidden="true">
      <circle
        cx="150"
        cy="150"
        r="105"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <path
        d="M217 68c29 17 48 48 48 84 0 58-47 105-105 105-45 0-84-29-99-69"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M211 65l45 1-18 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
      <path
        d="M78 226c-27-19-43-50-43-84 0-50 36-93 84-103"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  );
}

function motionProps(delay = 0): MotionProps {
  return {
    initial: { opacity: 0.82, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-12% 0px" },
    transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] as const }
  };
}

export default function Page() {
  const shouldReduceMotion = useReducedMotion();
  const fade = (delay = 0): MotionProps =>
    shouldReduceMotion ? { initial: false } : motionProps(delay);

  return (
    <main>
      <div className="light" />
      <div className="noise" />
      <div className="orb" />

      <nav className="nav" aria-label="Primary navigation">
        <a href="#" className="logo" aria-label="Ouroboros home">
          OUROBOROS
        </a>
        <div className="navlinks">
          <a href="#symbol">Symbol</a>
          <a href="#cycle">Cycle</a>
          <a href="#manifesto">Manifesto</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <motion.p className="kicker reveal" {...fade(0)}>
            Renewal / Discipline / Return
          </motion.p>
          <motion.h1 className="reveal" {...fade(0.08)}>
            Every End
            <br />
            Is A New
            <br />
            Beginning
          </motion.h1>
          <motion.p className="hero-copy reveal" {...fade(0.16)}>
            Ouroboros is the discipline of returning to yourself - shedding what
            has expired, absorbing the lesson, and entering the next cycle with
            sharper intent.
          </motion.p>
          <motion.div className="actions reveal" {...fade(0.24)}>
            <motion.a className="btn primary" href="#symbol" whileHover={shouldReduceMotion ? undefined : { y: -2 }}>
              Enter the cycle
            </motion.a>
            <motion.a className="btn" href="#manifesto" whileHover={shouldReduceMotion ? undefined : { y: -2 }}>
              Read manifesto
            </motion.a>
          </motion.div>
        </div>

        <motion.div className="visual reveal" {...fade(0.18)}>
          <div className="ring" />
          <div className="ring2" />
          <OuroborosMark className="symbol-svg" />
          <motion.div
            className="image-card"
            whileHover={shouldReduceMotion ? undefined : { rotateY: 2.5, rotateX: -2.5, y: -6 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/ouroboros-hero.png"
              alt="Monochrome figure framed by an Ouroboros symbol"
            />
          </motion.div>
        </motion.div>
      </section>

      <div className="marquee" aria-hidden="true">
        <span>
          OUROBOROS - RENEWAL - DISCIPLINE - RETURN - TRANSFORMATION - EVERY END
          IS A NEW BEGINNING - OUROBOROS - RENEWAL - DISCIPLINE - RETURN -
          TRANSFORMATION - EVERY END IS A NEW BEGINNING -
        </span>
      </div>

      <section className="section two" id="symbol">
        <motion.div className="reveal" {...fade(0)}>
          <p className="kicker">The Symbol</p>
          <h2>The serpent closes the circle.</h2>
        </motion.div>

        <div className="cards">
          {cards.map((card, index) => (
            <motion.div
              className="card reveal"
              key={card}
              {...fade(index * 0.05)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{card}</strong>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" id="cycle">
        <div className="two">
          <motion.div className="reveal" {...fade(0)}>
            <p className="kicker">The Cycle</p>
            <h2>Destroy. Digest. Design. Return.</h2>
          </motion.div>
          <motion.p className="copy reveal" {...fade(0.08)}>
            The Ouroboros is not passive. It is an active symbol of
            self-renewal. The old version must be consumed before the new one
            can be built. In identity, craft, business, and personal
            evolution, the loop is the same: remove excess, preserve essence,
            and return with intent.
          </motion.p>
        </div>

        <div className="grid">
          {cycle.map(([title, body], index) => (
            <motion.article
              className="tile reveal"
              key={title}
              {...fade(index * 0.035)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section final" id="manifesto">
        <motion.div className="final-inner reveal" {...fade(0)}>
          <div className="symbol-wrap">
            <OuroborosMark />
          </div>
          <p className="kicker">Manifesto</p>
          <h2>You are not starting over. You are returning with evidence.</h2>
          <p className="copy final-copy">
            The circle is not a trap. It is a forge. Each ending exposes what
            was weak. Each return proves what survived.
          </p>
        </motion.div>
      </section>

      <footer className="footer">
        <span>OUROBOROS / 2026</span>
        <span>Every end is a new beginning</span>
      </footer>

      <style jsx global>{`
        :root {
          --bg: #030303;
          --ink: #f4f1ea;
          --muted: #a39d91;
          --soft: #696158;
          --line: rgba(244, 241, 234, 0.14);
          --panel: rgba(255, 255, 255, 0.04);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          background: var(--bg);
        }

        body {
          margin: 0;
          color: var(--ink);
          background:
            radial-gradient(circle at 50% 0%, rgba(244, 241, 234, 0.13), transparent 34%),
            radial-gradient(circle at 82% 45%, rgba(244, 241, 234, 0.055), transparent 32%),
            var(--bg);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.08;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 6px 6px;
        }

        .light {
          position: absolute;
          inset: 0 0 auto;
          height: 120vh;
          pointer-events: none;
          z-index: 0;
          opacity: 0.72;
          background:
            radial-gradient(circle at 62% 20%, rgba(244, 241, 234, 0.1), transparent 35%),
            radial-gradient(circle at 18% 82%, rgba(244, 241, 234, 0.045), transparent 32%);
        }

        .orb {
          position: absolute;
          left: 58%;
          top: 11%;
          width: 44vw;
          aspect-ratio: 1;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          background: radial-gradient(circle, rgba(244, 241, 234, 0.12), transparent 62%);
        }

        .nav {
          position: fixed;
          inset: 0 0 auto;
          z-index: 50;
          height: 78px;
          padding: 0 clamp(20px, 5vw, 72px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(to bottom, rgba(3, 3, 3, 0.78), transparent);
          backdrop-filter: blur(16px);
        }

        .logo,
        .navlinks a,
        .kicker,
        .footer {
          text-transform: uppercase;
          letter-spacing: 0.32em;
          font-size: 11px;
        }

        .navlinks {
          display: flex;
          gap: 26px;
          color: var(--muted);
        }

        .navlinks a {
          transition: color 0.25s ease;
        }

        .navlinks a:hover {
          color: var(--ink);
        }

        .hero {
          min-height: 100vh;
          padding: 112px clamp(20px, 5vw, 72px) 64px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(34px, 6vw, 88px);
          align-items: center;
        }

        .kicker {
          color: var(--muted);
          margin: 0 0 26px;
        }

        h1,
        h2,
        h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          letter-spacing: -0.065em;
        }

        h1 {
          font-size: clamp(64px, 11vw, 174px);
          line-height: 0.86;
          margin: 0;
        }

        h2 {
          font-size: clamp(44px, 7vw, 108px);
          line-height: 0.94;
          margin: 0;
        }

        .hero-copy {
          max-width: 660px;
          color: var(--muted);
          font-size: clamp(16px, 2vw, 21px);
          line-height: 1.76;
          margin: 34px 0 0;
        }

        .actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 38px;
        }

        .btn {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--line);
          padding: 15px 21px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-size: 11px;
          transition:
            transform 0.25s ease,
            border-color 0.25s ease;
        }

        .btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.24), transparent);
          transform: translateX(-130%);
          transition: transform 0.62s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          border-color: rgba(244, 241, 234, 0.42);
        }

        .btn:hover::before {
          transform: translateX(130%);
        }

        .btn.primary {
          background: var(--ink);
          color: var(--bg);
        }

        .visual {
          position: relative;
          min-height: 660px;
          display: grid;
          place-items: center;
          perspective: 1200px;
        }

        .ring {
          position: absolute;
          width: min(88vw, 650px);
          aspect-ratio: 1;
          border: 1px solid rgba(244, 241, 234, 0.28);
          border-radius: 999px;
          box-shadow:
            inset 0 0 75px rgba(255, 255, 255, 0.035),
            0 0 100px rgba(255, 255, 255, 0.035);
        }

        .ring::before {
          content: "OUROBOROS - RENEWAL - DISCIPLINE - RETURN - TRANSFORMATION -";
          position: absolute;
          inset: 24px;
          border-radius: 50%;
          display: grid;
          place-items: start center;
          color: rgba(244, 241, 234, 0.42);
          letter-spacing: 0.26em;
          font-size: 10px;
          text-align: center;
        }

        .ring2 {
          position: absolute;
          width: min(70vw, 510px);
          aspect-ratio: 1;
          border: 1px solid rgba(244, 241, 234, 0.11);
          border-radius: 50%;
        }

        .symbol-svg {
          position: absolute;
          width: min(70vw, 520px);
          opacity: 0.32;
          color: var(--ink);
          filter: drop-shadow(0 0 42px rgba(244, 241, 234, 0.08));
        }

        .image-card {
          position: relative;
          z-index: 4;
          width: min(560px, 100%);
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border: 1px solid var(--line);
          background: #080808;
          box-shadow: 0 60px 130px rgba(0, 0, 0, 0.88);
        }

        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.09) saturate(0.72);
          transform: scale(1.02);
        }

        .image-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #030303 0%, transparent 42%, rgba(255, 255, 255, 0.04));
        }

        .marquee {
          border-block: 1px solid var(--line);
          overflow: hidden;
          white-space: nowrap;
          color: rgba(244, 241, 234, 0.35);
          text-transform: uppercase;
          letter-spacing: 0.24em;
          font-size: 12px;
          padding: 18px 0;
        }

        .marquee span {
          display: inline-block;
          min-width: 200%;
        }

        .section {
          padding: clamp(84px, 12vw, 170px) clamp(20px, 5vw, 72px);
          border-top: 1px solid var(--line);
        }

        .two {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: clamp(32px, 6vw, 88px);
          align-items: start;
        }

        .copy {
          color: var(--muted);
          font-size: clamp(16px, 1.7vw, 20px);
          line-height: 1.85;
          margin: 0;
        }

        .cards {
          display: grid;
          gap: 14px;
        }

        .card {
          border: 1px solid var(--line);
          background: var(--panel);
          padding: clamp(22px, 3vw, 34px);
          backdrop-filter: blur(14px);
          transition:
            transform 0.35s ease,
            background 0.35s ease,
            border-color 0.35s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(244, 241, 234, 0.3);
        }

        .card span,
        .tile span {
          display: block;
          color: var(--soft);
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-size: 11px;
          margin-bottom: 28px;
        }

        .card strong {
          display: block;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          letter-spacing: -0.04em;
          line-height: 1;
          font-size: clamp(30px, 4.5vw, 58px);
        }

        .grid {
          margin-top: 64px;
          border: 1px solid var(--line);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line);
        }

        .tile {
          min-height: 250px;
          background: rgba(3, 3, 3, 0.94);
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .tile:hover {
          background: rgba(18, 18, 18, 0.98);
          transform: translateY(-3px);
        }

        .tile h3 {
          font-size: 40px;
          margin: 0 0 16px;
        }

        .tile p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
        }

        .final {
          min-height: 86vh;
          display: grid;
          place-items: center;
          text-align: center;
          position: relative;
        }

        .final::before {
          content: "";
          position: absolute;
          width: min(86vw, 720px);
          aspect-ratio: 1;
          border-radius: 50%;
          border: 1px solid rgba(244, 241, 234, 0.11);
          box-shadow: 0 0 110px rgba(244, 241, 234, 0.05);
        }

        .final-inner {
          max-width: 980px;
          position: relative;
          z-index: 2;
        }

        .symbol-wrap {
          width: 190px;
          margin: 0 auto 32px;
          color: var(--ink);
        }

        .final-copy {
          max-width: 700px;
          margin: 30px auto 0;
        }

        .footer {
          border-top: 1px solid var(--line);
          padding: 26px clamp(20px, 5vw, 72px);
          color: var(--muted);
          display: flex;
          justify-content: space-between;
          gap: 16px;
        }

        .reveal {
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity 0.95s ease,
            transform 0.95s cubic-bezier(0.2, 0.75, 0.2, 1);
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.001ms !important;
          }
        }

        @media (max-width: 900px) {
          .navlinks {
            display: none;
          }

          .hero,
          .two,
          .grid {
            grid-template-columns: 1fr;
          }

          .visual {
            min-height: 520px;
          }

          .hero {
            padding-top: 104px;
          }

          .footer {
            flex-direction: column;
          }
        }

        @media (max-width: 560px) {
          .hero {
            padding-inline: 18px;
          }

          h1 {
            font-size: clamp(54px, 18vw, 82px);
          }

          .visual {
            min-height: 430px;
          }

          .image-card {
            width: min(360px, 88vw);
          }
        }
      `}</style>
    </main>
  );
}

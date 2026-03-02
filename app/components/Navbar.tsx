"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
  { name: "Home", href: "/" },
  { name: "Anime", href: "/anime" },
  { name: "Manga", href: "/manga" },
  { name: "Jogos", href: "/jogos" },
];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600&display=swap');

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          padding: 0 2.5rem;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
          background: ${scrolled ? 'rgba(5, 5, 10, 0.95)' : 'transparent'};
          backdrop-filter: ${scrolled ? 'blur(20px)' : 'none'};
          border-bottom: ${scrolled ? '1px solid rgba(0, 255, 255, 0.15)' : '1px solid transparent'};
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          text-decoration: none;
        }

        .logo-icon {
          width: 44px;
          height: 44px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-icon svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .logo-letter {
          font-family: 'Orbitron', monospace;
          font-weight: 900;
          font-size: 1.3rem;
          color: #00ffff;
          position: relative;
          z-index: 1;
          text-shadow: 0 0 15px rgba(0,255,255,0.8);
        }

        .logo-text {
          font-family: 'Orbitron', monospace;
          font-weight: 700;
          font-size: 1rem;
          color: #fff;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .logo-text span {
          color: #00ffff;
          text-shadow: 0 0 10px rgba(0,255,255,0.6);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-btn {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #aaa;
          background: transparent;
          border: none;
          padding: 0.5rem 1.2rem;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
          overflow: hidden;
        }

        .nav-btn::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ffff, transparent);
          transition: width 0.3s ease;
          box-shadow: 0 0 8px #00ffff;
        }

        .nav-btn:hover {
          color: #fff;
        }

        .nav-btn:hover::before {
          width: 80%;
        }

        .nav-btn.active {
          color: #00ffff;
          text-shadow: 0 0 10px rgba(0,255,255,0.5);
        }

        .nav-btn.active::before {
          width: 80%;
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0,255,255,0.08), transparent);
          animation: scan 4s linear infinite;
          pointer-events: none;
        }

        @keyframes scan {
          0% { left: -10%; }
          100% { left: 110%; }
        }

        .corner {
          position: absolute;
          width: 8px;
          height: 8px;
          border-color: rgba(0,255,255,0.5);
          border-style: solid;
        }
        .corner-tl { top: 6px; left: 6px; border-width: 1px 0 0 1px; }
        .corner-tr { top: 6px; right: 6px; border-width: 1px 1px 0 0; }
        .corner-bl { bottom: 6px; left: 6px; border-width: 0 0 1px 1px; }
        .corner-br { bottom: 6px; right: 6px; border-width: 0 1px 1px 0; }
      `}</style>

      <nav className="nav">
        <div className="scan-line" />
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        {/* LOGO */}
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon
                points="22,2 42,12 42,32 22,42 2,32 2,12"
                stroke="rgba(0,255,255,0.5)"
                strokeWidth="1"
                fill="rgba(0,255,255,0.05)"
              />
              <polygon
                points="22,6 38,14 38,30 22,38 6,30 6,14"
                stroke="rgba(0,255,255,0.2)"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>
            <span className="logo-letter">M</span>
          </div>
          <span className="logo-text">
            <span>Merquiades</span>
          </span>
        </div>

        {/* LINKS */}
        <ul className="nav-links">
          {/* LINKS */}
<ul className="nav-links">
  {links.map((link) => (
    <li key={link.name}>
      <Link href={link.href}>
        <button
          className={`nav-btn ${active === link.name ? "active" : ""}`}
          onClick={() => setActive(link.name)}
        >
          {link.name}
        </button>
      </Link>
    </li>
  ))}
</ul>
        </ul>
      </nav>
    </>
  );
}
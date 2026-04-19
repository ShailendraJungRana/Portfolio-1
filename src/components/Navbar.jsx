import { useState, useEffect } from "react";

const css = `
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 4rem;
  background: rgba(8,12,16,0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}
.nav-logo {
  font-family: var(--sans);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 0.02em;
  cursor: none;
  z-index: 110;
}
.nav-logo span { color: var(--text); }

/* Desktop links */
.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}
.nav-links a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
  cursor: none;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0;
  width: 0; height: 1px;
  background: var(--accent);
  transition: width 0.25s;
}
.nav-links a:hover { color: var(--accent); }
.nav-links a:hover::after { width: 100%; }

.nav-cta {
  padding: 0.4rem 1.2rem;
  border: 1px solid var(--accent);
  color: var(--accent);
  background: transparent;
  font-family: var(--mono);
  font-size: 0.78rem;
  cursor: none;
  letter-spacing: 0.08em;
  transition: background 0.2s, color 0.2s;
}
.nav-cta:hover { background: var(--accent); color: var(--bg); }

/* Hamburger button */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  z-index: 110;
  width: 32px;
  height: 32px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease, background 0.2s;
  transform-origin: center;
}
.hamburger.open span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
  background: var(--accent);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
  background: var(--accent);
}

/* Mobile drawer */
.mobile-menu {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 99;
  background: rgba(8,12,16,0.97);
  backdrop-filter: blur(20px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.mobile-menu.open {
  opacity: 1;
  pointer-events: all;
}
.mobile-menu ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  width: 100%;
  padding: 0 2rem;
}
.mobile-menu ul li {
  width: 100%;
  border-bottom: 1px solid var(--border);
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.mobile-menu ul li:first-child {
  border-top: 1px solid var(--border);
}
.mobile-menu.open ul li {
  transform: translateY(0);
  opacity: 1;
}
.mobile-menu.open ul li:nth-child(1) { transition-delay: 0.05s; }
.mobile-menu.open ul li:nth-child(2) { transition-delay: 0.1s;  }
.mobile-menu.open ul li:nth-child(3) { transition-delay: 0.15s; }
.mobile-menu.open ul li:nth-child(4) { transition-delay: 0.2s;  }
.mobile-menu.open ul li:nth-child(5) { transition-delay: 0.25s; }
.mobile-menu.open ul li:nth-child(6) { transition-delay: 0.3s;  }

.mobile-menu ul li a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 0;
  color: var(--muted);
  text-decoration: none;
  font-family: var(--sans);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: color 0.2s;
  cursor: pointer;
  width: 100%;
}
.mobile-menu ul li a:hover { color: var(--accent); }
.mobile-menu ul li a .arrow {
  font-size: 1rem;
  color: var(--border);
  transition: color 0.2s, transform 0.2s;
}
.mobile-menu ul li a:hover .arrow {
  color: var(--accent);
  transform: translateX(4px);
}

.mobile-cta {
  margin-top: 2.5rem;
  padding: 0.8rem 3rem;
  border: 1px solid var(--accent);
  color: var(--accent);
  background: transparent;
  font-family: var(--mono);
  font-size: 0.85rem;
  cursor: pointer;
  letter-spacing: 0.1em;
  transition: background 0.2s, color 0.2s;
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.4s ease 0.35s, opacity 0.4s ease 0.35s, background 0.2s, color 0.2s;
}
.mobile-menu.open .mobile-cta {
  transform: translateY(0);
  opacity: 1;
}
.mobile-cta:hover { background: var(--accent); color: var(--bg); }

/* Responsive breakpoint */
@media (max-width: 768px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links { display: none; }
  .nav-cta { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: flex; }
}
`;

const NAV_LINKS = ["about", "skills", "experience", "projects", "education", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <style>{css}</style>

      <nav>
        <a href="#hero" className="nav-logo">Shailendra<span>JR</span>.DevOps</a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map(s => (
            <li key={s}>
              <a href={`#${s}`}>{s}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="nav-cta" onClick={() => scrollTo("contact")}>
          HIRE ME
        </button>

        {/* Hamburger (mobile only) */}
        <button
          className={`hamburger${open ? " open" : ""}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile full-screen drawer */}
      <div className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        <ul>
          {NAV_LINKS.map(s => (
            <li key={s}>
              <a onClick={() => scrollTo(s)}>
                {s}
                <span className="arrow">→</span>
              </a>
            </li>
          ))}
        </ul>
        <button className="mobile-cta" onClick={() => scrollTo("contact")}>
          HIRE ME
        </button>
      </div>
    </>
  );
}

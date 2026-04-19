import { PROFILE } from "../data/portfolio.js";

const css = `
.footer {
  border-top: 1px solid var(--border);
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.72rem;
  color: var(--muted);
}
.footer a { color: var(--accent); text-decoration: none; cursor: none; }
.footer a:hover { text-decoration: underline; }
.footer-logo {
  font-family: var(--sans);
  font-weight: 800;
  font-size: 0.95rem;
  color: var(--accent);
}
.footer-logo span { color: var(--text); }
@media (max-width: 900px) {
  .footer { flex-direction: column; gap: 0.8rem; text-align: center; padding: 2rem; }
}
`;

export default function Footer() {
  return (
    <>
      <style>{css}</style>
      <footer className="footer">
        <span className="footer-logo">dev<span>Ops</span>.engineer</span>
        <span>© {new Date().getFullYear()} {PROFILE.name} — Made with ☕ & React</span>
        <span><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></span>
      </footer>
    </>
  );
}

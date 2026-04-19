import { EDUCATION } from "../data/portfolio.js";

const css = `
.education-section {
  padding: 7rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}
.edu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.edu-card {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 2rem;
  position: relative;
  transition: border-color 0.25s, transform 0.25s;
}
.edu-card::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 2px;
  background: var(--accent);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;
}
.edu-card:hover { border-color: rgba(0,255,136,0.2); transform: translateY(-3px); }
.edu-card:hover::before { transform: scaleY(1); }
.edu-icon { font-size: 1.6rem; margin-bottom: 1rem; }
.edu-degree {
  font-family: var(--sans);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  line-height: 1.3;
}
.edu-school { font-size: 0.82rem; color: var(--accent2); margin-bottom: 0.3rem; }
.edu-year {
  font-size: 0.7rem;
  color: var(--muted);
  margin-bottom: 0.8rem;
  letter-spacing: 0.1em;
}
.edu-desc { font-size: 0.78rem; color: var(--muted); line-height: 1.7; }
.edu-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(0,255,136,0.07);
  border: 1px solid rgba(0,255,136,0.15);
  color: var(--accent);
  font-size: 0.62rem;
  padding: 0.2rem 0.5rem;
  letter-spacing: 0.1em;
  margin-top: 0.8rem;
}
@media (max-width: 900px) {
  .education-section { padding: 5rem 2rem; }
  .edu-grid { grid-template-columns: 1fr; }
}
`;

const ICONS = ["🎓","🎓","🎓", "☁️", "🚢", "🏗️"];

export default function Education() {
  return (
    <>
      <style>{css}</style>
      <section className="education-section" id="education">
        <div className="section-tag fade-up">ACADEMICS & CERTS</div>
        <h2 className="section-title fade-up d1">Education</h2>
        <div className="section-line fade-up d2" />
        <div className="edu-grid">
          {EDUCATION.map((e, i) => (
            <div className={`edu-card fade-up d${(i % 2) + 1}`} key={e.degree}>
              <div className="edu-icon">{ICONS[i]}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-year">📅 {e.year}</div>
              <div className="edu-desc">{e.desc}</div>
              {i === 1 && <div className="edu-badge">✓ CERTIFIED</div>}              
            </div>
            
          ))}
        </div>
      </section>
    </>
  );
}

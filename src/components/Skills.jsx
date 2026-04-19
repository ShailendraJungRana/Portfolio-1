import { SKILLS } from "../data/portfolio.js";

const css = `
.skills-section {
  padding: 7rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}
.skills-category { margin-bottom: 3rem; }
.cat-label {
  font-size: 0.7rem;
  color: var(--accent2);
  letter-spacing: 0.2em;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.cat-label::after {
  content: '';
  flex: 1; height: 1px;
  background: var(--border);
}
.skills-grid { display: flex; flex-wrap: wrap; gap: 0.6rem; }
.skill-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 0.6rem 1.1rem;
  font-size: 0.78rem;
  color: var(--text);
  transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
  cursor: none;
}
.skill-tag:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(0,255,136,0.05);
  transform: translateY(-2px);
}
.skill-icon { font-size: 1rem; }
@media (max-width: 900px) {
  .skills-section { padding: 5rem 2rem; }
}
`;

export default function Skills() {
  return (
    <>
      <style>{css}</style>
      <section className="skills-section" id="skills">
        <div className="section-tag fade-up">TECHNICAL ARSENAL</div>
        <h2 className="section-title fade-up d1">Skills & Technologies</h2>
        <div className="section-line fade-up d2" />
        <div>
          {Object.entries(SKILLS).map(([cat, items], ci) => (
            <div className={`skills-category fade-up d${(ci % 4) + 1}`} key={cat}>
              <div className="cat-label">{cat}</div>
              <div className="skills-grid">
                {items.map(({ name, icon }) => (
                  <div className="skill-tag" key={name}>
                    <span className="skill-icon">{icon}</span>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

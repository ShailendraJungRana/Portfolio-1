import { PROJECTS } from "../data/portfolio.js";

const css = `
.projects-section {
  padding: 7rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
}
.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;
  cursor: none;
}
.project-card::after {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 0; height: 2px;
  background: var(--accent);
  transition: width 0.4s ease;
}
.project-card:hover { border-color: rgba(0,255,136,0.25); transform: translateY(-4px); }
.project-card:hover::after { width: 100%; }
.project-number {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--border);
  position: absolute;
  top: 1rem; right: 1.5rem;
  font-family: var(--sans);
  line-height: 1;
  pointer-events: none;
  transition: color 0.3s;
}
.project-card:hover .project-number { color: rgba(0,255,136,0.07); }
.project-category {
  font-size: 0.65rem;
  color: var(--accent3);
  letter-spacing: 0.2em;
  margin-bottom: 0.8rem;
}
.project-name {
  font-family: var(--sans);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  line-height: 1.3;
}
.project-desc {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 1.2rem;
}
.project-stack { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem; }
.stack-pill {
  background: var(--surface2);
  border: 1px solid var(--border);
  font-size: 0.65rem;
  padding: 0.2rem 0.5rem;
  color: var(--muted);
  letter-spacing: 0.05em;
}
.project-links { display: flex; gap: 1rem; }
.proj-link {
  font-size: 0.72rem;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.2s;
  cursor: none;
}
.proj-link:hover { color: var(--accent); }
@media (max-width: 900px) {
  .projects-section { padding: 5rem 2rem; }
  .projects-grid { grid-template-columns: 1fr; }
}
`;

export default function Projects() {
  return (
    <>
      <style>{css}</style>
      <section className="projects-section" id="projects">
        <div className="section-tag fade-up">SELECTED WORK</div>
        <h2 className="section-title fade-up d1">Projects</h2>
        <div className="section-line fade-up d2" />
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div className={`project-card fade-up d${(i % 3) + 1}`} key={p.num}>
              <div className="project-number">{p.num}</div>
              <div className="project-category">{p.category}</div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-stack">
                {p.stack.map(s => <span className="stack-pill" key={s}>{s}</span>)}
              </div>
              <div className="project-links">
                <a href="#" className="proj-link">↗ View Details</a>
                <a href="#" className="proj-link">⌥ GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

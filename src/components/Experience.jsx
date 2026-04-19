import { EXPERIENCES } from "../data/portfolio.js";

const css = `
.experience-section {
  padding: 7rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}
.timeline { position: relative; padding-left: 2rem; }
.timeline::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 1px;
  background: var(--border);
}
.timeline-item {
  position: relative;
  margin-bottom: 3.5rem;
  padding-left: 2rem;
  transition: opacity 0.3s;
}
.timeline-item:last-child { margin-bottom: 0; }
.timeline-dot {
  position: absolute;
  left: -2.45rem; top: 0.4rem;
  width: 10px; height: 10px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(0,255,136,0.5);
  transition: transform 0.3s, box-shadow 0.3s;
}
.timeline-item:hover .timeline-dot {
  transform: scale(1.5);
  box-shadow: 0 0 20px rgba(0,255,136,0.7);
}
.timeline-inner {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 1.8rem 2rem;
  transition: border-color 0.3s;
}
.timeline-item:hover .timeline-inner { border-color: rgba(0,255,136,0.2); }
.timeline-date {
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.12em;
  margin-bottom: 0.6rem;
}
.timeline-role {
  font-family: var(--sans);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}
.timeline-company {
  font-size: 0.82rem;
  color: var(--accent2);
  margin-bottom: 1rem;
}
.timeline-desc {
  font-size: 0.83rem;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 1rem;
}
.timeline-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.tl-tag {
  background: rgba(0,180,216,0.08);
  border: 1px solid rgba(0,180,216,0.2);
  color: var(--accent2);
  font-size: 0.68rem;
  padding: 0.25rem 0.6rem;
  letter-spacing: 0.05em;
}
@media (max-width: 900px) {
  .experience-section { padding: 5rem 2rem; }
}
`;

export default function Experience() {
  return (
    <>
      <style>{css}</style>
      <section className="experience-section" id="experience">
        <div className="section-tag fade-up">WORK HISTORY</div>
        <h2 className="section-title fade-up d1">Experience</h2>
        <div className="section-line fade-up d2" />
        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <div className={`timeline-item fade-up d${(i % 3) + 1}`} key={exp.role}>
              <div className="timeline-dot" />
              <div className="timeline-inner">
                <div className="timeline-date">{exp.date}</div>
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">@ {exp.company}</div>
                <div className="timeline-desc">{exp.desc}</div>
                <div className="timeline-tags">
                  {exp.tags.map(t => <span className="tl-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

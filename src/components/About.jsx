import  PROFILE  from "../assets/shailendra.jpg";
import resume from "../assets/SJR.pdf"

// 👉 Replace this import with your actual profile image:
// import profileImg from "../assets/profile.jpg";
// Then swap the placeholder div below with: <img src={profileImg} alt="Profile" className="profile-photo" />
const PROFILE_IMAGE = PROFILE; // set to your imported image

const css = `
.about-section {
  padding: 7rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ── Profile + Bio layout ── */
.about-top {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 4rem;
}

/* Profile card */
.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  position: sticky;
  top: 6rem;
}
.profile-img-wrap {
  position: relative;
  width: 220px;
  height: 220px;
  margin-bottom: 1.5rem;
}

/* Animated border ring */
.profile-img-wrap::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: conic-gradient(var(--accent) 0deg, var(--accent2) 120deg, transparent 180deg, var(--accent3) 240deg, transparent 300deg, var(--accent) 360deg);
  animation: spin 6s linear infinite;
  z-index: 0;
}
.profile-img-wrap::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 50%;
  background: var(--bg);
  z-index: 1;
}
@keyframes spin { to { transform: rotate(360deg); } }

.profile-photo {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: middle;
  display: block;
}

/* Placeholder shown when no image is provided */
.profile-placeholder {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--surface2);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-align: center;
  padding: 1rem;
}
.placeholder-icon { font-size: 2.8rem; opacity: 0.4; }
.placeholder-hint {
  font-size: 0.62rem;
  color: var(--accent);
  opacity: 0.7;
  padding: 0 0.5rem;
  line-height: 1.5;
}

/* Status badge under photo */
.profile-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0,255,136,0.08);
  border: 1px solid rgba(0,255,136,0.2);
  padding: 0.35rem 0.9rem;
  font-size: 0.68rem;
  color: var(--accent);
  letter-spacing: 0.12em;
  margin-bottom: 1.2rem;
}
.status-dot {
  width: 6px; height: 6px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

.profile-name {
  font-family: var(--sans);
  font-size: 1.3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.3rem;
}
.profile-title {
  font-size: 0.75rem;
  color: var(--accent2);
  text-align: center;
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}
.profile-location {
  font-size: 0.7rem;
  color: var(--muted);
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Quick social links in profile card */
.profile-socials {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}
.social-btn {
  width: 36px; height: 36px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
  cursor: none;
}
.social-btn:hover { border-color: var(--accent); color: var(--accent); }

.download-cv {
  width: 100%;
  padding: 0.7rem;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  cursor: none;
  transition: border-color 0.2s, color 0.2s;
}
.download-cv:hover { border-color: var(--accent); color: var(--accent); }

/* ── Bio side ── */
.about-bio { }
.about-bio-intro {
  font-family: var(--sans);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.5rem;
}
.about-bio-intro .hi { color: var(--muted); font-weight: 400; font-size: 1rem; display: block; margin-bottom: 0.4rem; letter-spacing: 0.05em; }
.about-bio-intro .name-accent { color: var(--accent); }

.bio-paragraphs { margin-bottom: 2rem; }
.bio-paragraphs p {
  color: var(--muted);
  line-height: 1.9;
  font-size: 0.88rem;
  margin-bottom: 1rem;
}
.bio-paragraphs p strong { color: var(--text); }

/* Personality tags */
.bio-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
.bio-tag {
  background: var(--surface2);
  border: 1px solid var(--border);
  padding: 0.3rem 0.75rem;
  font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.06em;
  transition: border-color 0.2s, color 0.2s;
}
.bio-tag:hover { border-color: var(--accent); color: var(--accent); }

/* ── Metrics grid ── */
.about-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.metric-card {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 1.5rem 1rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.25s, transform 0.25s;
  text-align: center;
}
.metric-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
}
.metric-card:hover { border-color: rgba(0,255,136,0.3); transform: translateY(-3px); }
.metric-val {
  font-family: var(--sans);
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
}
.metric-desc { font-size: 0.68rem; color: var(--muted); margin-top: 0.4rem; letter-spacing: 0.06em; line-height: 1.4; }

@media (max-width: 900px) {
  .about-section { padding: 5rem 2rem; }
  .about-top { grid-template-columns: 1fr; gap: 2.5rem; }
  .profile-card { position: static; flex-direction: row; flex-wrap: wrap; justify-content: center; }
  .about-metrics { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 500px) {
  .about-metrics { grid-template-columns: 1fr 1fr; }
}
`;

const TAGS = [
  "Cloud & DevOps",
"CI/CD Pipelines",
"Docker & Kubernetes",
"Infrastructure as Code",
"Automation",
"Open Source",
"Monitoring Basics",
"Problem Solving"
];

export default function About() {
  return (
    <>
      <style>{css}</style>
      <section className="about-section" id="about">

        {/* Section label */}
        <div className="section-tag fade-up">ABOUT ME</div>
        <h2 className="section-title fade-up d1">The Engineer Behind<br/>the Architecture</h2>
        <div className="section-line fade-up d2" />

        {/* Top: Profile card + Bio */}
        <div className="about-top">

          {/* ── Profile Card ── */}
          <div className="profile-card fade-up d2">
            <div className="profile-img-wrap">
              {PROFILE_IMAGE ? (
                <img src={PROFILE_IMAGE} alt={PROFILE.name} className="profile-photo" />
              ) : (
                <div className="profile-placeholder">
                  <span className="placeholder-icon">👤</span>
                  <span className="placeholder-hint">Upload your<br/>profile image</span>
                </div>
              )}
            </div>

            <div className="profile-status">
              <span className="status-dot" />
              AVAILABLE FOR WORK
            </div>

            <div className="profile-name">{PROFILE.name}</div>
            <div className="profile-title">{PROFILE.title}</div>
            <div className="profile-location">📍 Bhaktapur, Lokanthali {PROFILE.location}</div>
            <div className="profile-socials">
              <a className="social-btn" href={`mailto:shailendera.jungrana@gmail.com${PROFILE.email}`} title="Email">✉️</a>
              <a className="social-btn" href="https://www.linkedin.com/in/shailendra-jung-rana-aa78781a1/" title="LinkedIn">💼</a>
              <a className="social-btn" href="https://github.com/ShailendraJungRana" title="GitHub">🐙</a>

            </div>

            {/* <button className="download-cv">⬇ DOWNLOAD CV</button> */}
            <a href={resume} download>
            <button className="download-cv">⬇ DOWNLOAD CV</button>
            </a>
          </div>

          {/* ── Bio Text ── */}
          <div className="about-bio fade-up d3">
            <div className="about-bio-intro">
              <span className="hi">// hello, world</span>
              I'm <span className="name-accent">Shailendra Jung Rana{PROFILE.name}</span>,<br/>
              I make infrastructure disappear.
            </div>

            <div className="bio-paragraphs">
            <p>
              An <strong>Aspiring Junior DevOps Engineer</strong> with a strong interest in the intersection of
              development and operations. I focus on learning and building cloud-native solutions that
              help teams deliver applications efficiently and reliably.
            </p>
{/* 
            <p>
             I have hands-on experience with <strong>Kubernetes, CI/CD pipelines, and cloud platforms</strong>
             through personal and academic projects. I enjoy exploring modern DevOps practices such as
             automation, containerization, and infrastructure as code to build scalable and maintainable systems.
            </p>

            <p>
              I am continuously improving my skills by working on real-world projects, experimenting with
              deployment workflows, and learning industry tools. I am currently seeking an opportunity to
              contribute, grow, and gain practical experience in a professional DevOps environment.
            </p> */}

            </div>

            <div className="bio-tags">
              {TAGS.map(t => <span className="bio-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>

        {/* ── Metrics ── */}
        {/* <div className="about-metrics">
          {[
            ["6+",    "Years of\nExperience"],
            ["50+",   "Microservices\nManaged"],
            ["$200K", "Cloud Savings\nIdentified"],
            ["99.98%","Uptime SLA\nDelivered"],
          ].map(([v, l], i) => (
            <div className={`metric-card fade-up d${i + 1}`} key={l}>
              <div className="metric-val">{v}</div>
              <div className="metric-desc">{l}</div>
            </div>
          ))}
        </div> */}

      </section>
    </>
  );
}

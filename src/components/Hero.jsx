import { useState, useEffect } from "react";

const css = `
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 4rem 4rem;
  position: relative;
  overflow: hidden;
}
.hero-grid-bg {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
}
.hero-glow {
  position: absolute;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.hero-content { max-width: 1100px; width: 100%; }
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0,255,136,0.08);
  border: 1px solid rgba(0,255,136,0.2);
  padding: 0.3rem 0.8rem;
  font-size: 0.72rem;
  color: var(--accent);
  letter-spacing: 0.15em;
  margin-bottom: 2rem;
}
.badge-dot {
  width: 6px; height: 6px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
.hero-title {
  font-family: var(--sans);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}
.hero-title .line { display: block; }
.hero-title .accent { color: var(--accent); }
.hero-subtitle {
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.8;
  max-width: 540px;
  margin-bottom: 2.5rem;
}
.hero-terminal {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 1.2rem 1.5rem;
  max-width: 460px;
  font-size: 0.8rem;
  margin-bottom: 2.5rem;
}
.terminal-bar { display: flex; gap: 6px; margin-bottom: 1rem; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.r { background: #ff5f57; }
.dot.y { background: #febc2e; }
.dot.g { background: #28c840; }
.terminal-line { margin-bottom: 0.3rem; }
.terminal-line .prompt { color: var(--accent); }
.terminal-line .cmd { color: var(--text); }
.terminal-line .out { color: var(--muted); padding-left: 1rem; }
.terminal-line .val { color: var(--accent2); }
.cursor-blink {
  display: inline-block;
  width: 8px; height: 14px;
  background: var(--accent);
  vertical-align: middle;
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }
.hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
.hero-stats {
  display: flex;
  gap: 3rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}
.stat-num {
  font-family: var(--sans);
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
}
.stat-label { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.1em; margin-top: 0.2rem; }
@media (max-width: 900px) {
  .hero { padding: 6rem 2rem 4rem; }
  .hero-stats { gap: 1.5rem; flex-wrap: wrap; }
}
`;

function Typewriter({ text, speed = 60 }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return <span>{displayed}<span className="cursor-blink" /></span>;
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{css}</style>
      <section className="hero" id="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-badge fade-up visible">
            <span className="badge-dot" />
            AVAILABLE FOR WORK
          </div>
          <h1 className="hero-title">
            <span className="line fade-up visible d1">Building Systems</span>
            <span className="line fade-up visible d2">That <span className="accent">Never</span> Sleep.</span>
          </h1>
          <p className="hero-subtitle fade-up visible d3">
          Junior DevOps Engineer with hands-on experience in cloud-native tools, CI/CD pipelines, 
          and Kubernetes through projects and self-learning. Eager to apply technical skills to real-world environments and 
          contribute to scalable, efficient systems. Currently seeking an entry-level DevOps role.
          </p>
          <div className="hero-terminal fade-up visible d4">
            <div className="terminal-bar">
              <span className="dot r"/><span className="dot y"/><span className="dot g"/>
            </div>
            <div className="terminal-line"><span className="prompt">❯ </span><span className="cmd">whoami</span></div>
            <div className="terminal-line"><span className="out val">Shailendra Jung Rana — Junior DevOps Engineer</span></div>
            <div className="terminal-line" style={{marginTop:"0.5rem"}}><span className="prompt">❯ </span><span className="cmd">kubectl get pods --all-namespaces | wc -l</span></div>
            <div className="terminal-line"> <span className="out val">Status: Running 🚀</span></div>
            <div className="terminal-line" style={{marginTop:"0.5rem"}}><span className="prompt">❯ </span><span className="cmd">uptime</span></div>
            <div className="terminal-line"><span className="out">load avg: <span className="val">0.12, 0.08, 0.05</span> — systems nominal</span></div>
            <div className="terminal-line" style={{marginTop:"0.5rem"}}>
              <span className="prompt">❯ </span>
              <Typewriter text="git push origin main --force-with-lease" speed={55} />
            </div>
          </div>
          <div className="hero-btns fade-up visible d5">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>VIEW PROJECTS →</button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>GET IN TOUCH</button>
          </div>
          {/* <div className="hero-stats fade-up visible" style={{ transitionDelay: "0.6s" }}>
            {[["6+","Years Experience"],["99.98%","Uptime SLA"],["1.2M+","Requests/day"],["70%","Deploy Time Cut"]].map(([n,l]) => (
              <div key={l}>
                <div className="stat-num">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}

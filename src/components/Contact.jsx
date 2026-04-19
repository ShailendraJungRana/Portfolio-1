import { useState } from "react";
import { PROFILE } from "../data/portfolio.js";

const css = `
.contact-section {
  padding: 7rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}
.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: start;
}
.contact-info h3 {
  font-family: var(--sans);
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.contact-info p { font-size: 0.85rem; color: var(--muted); line-height: 1.8; margin-bottom: 2rem; }
.contact-links { display: flex; flex-direction: column; gap: 0.8rem; }
.contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  text-decoration: none;
  font-size: 0.8rem;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
  cursor: none;
}
.contact-link:hover { border-color: var(--accent); color: var(--accent); transform: translateX(4px); }
.link-icon { font-size: 1.1rem; width: 24px; text-align: center; }
.link-label { color: var(--muted); font-size: 0.65rem; display: block; letter-spacing: 0.08em; margin-bottom: 0.1rem; }

/* Form */
.contact-form { display: flex; flex-direction: column; gap: 1rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.field { display: flex; flex-direction: column; gap: 0.4rem; }
.field label { font-size: 0.68rem; color: var(--muted); letter-spacing: 0.12em; }
.field input,
.field textarea,
.field select {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--mono);
  font-size: 0.82rem;
  padding: 0.75rem 1rem;
  outline: none;
  transition: border-color 0.2s;
  cursor: none;
}
.field input:focus,
.field textarea:focus,
.field select:focus { border-color: var(--accent); }
.field textarea { resize: vertical; min-height: 130px; }
.field select option { background: var(--surface2); }
.form-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 2rem;
  background: var(--accent);
  color: var(--bg);
  font-family: var(--mono);
  font-size: 0.82rem;
  font-weight: 700;
  border: none;
  cursor: none;
  letter-spacing: 0.08em;
  transition: box-shadow 0.2s, transform 0.2s;
  align-self: flex-start;
  width: 100%;
}
.form-submit:hover:not(:disabled) { box-shadow: 0 0 28px rgba(0,255,136,0.35); transform: translateY(-1px); }
.form-submit:disabled { opacity: 0.5; }
.success-msg {
  padding: 1.5rem;
  background: rgba(0,255,136,0.08);
  border: 1px solid rgba(0,255,136,0.25);
  color: var(--accent);
  font-size: 0.85rem;
  text-align: center;
  line-height: 1.8;
}
.sending-dots::after {
  content: '...';
  animation: dots 1.2s steps(4, end) infinite;
}
@keyframes dots {
  0%   { content: ''; }
  25%  { content: '.'; }
  50%  { content: '..'; }
  75%  { content: '...'; }
}
@media (max-width: 900px) {
  .contact-section { padding: 5rem 2rem; }
  .contact-wrapper { grid-template-columns: 1fr; gap: 3rem; }
  .form-row { grid-template-columns: 1fr; }
  .form-submit { width: 100%; }
}
`;

const LINKS = [
  { icon: "✉️", label: "EMAIL", val: "shailendera.jungrana@gmail.com", href: `mailto:shailendera.jungrana@gmail.com` },
  { icon: "💼", label: "LINKEDIN", val: "https://www.linkedin.com/in/shailendra-jung-rana-aa78781a1/", href: "#" },
  { icon: "🐙", label: "GITHUB", val: "https://github.com/ShailendraJungRana", href: "https://github.com/ShailendraJungRana" },
  { icon: "📍", label: "LOCATION", val: "Bhaktapur,Lokanthali, Nepal · Remote· Onsite ", href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1800);
  };

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <style>{css}</style>
      <section className="contact-section" id="contact">
        <div className="section-tag fade-up">GET IN TOUCH</div>
        <h2 className="section-title fade-up d1">Let's Build Something</h2>
        <div className="section-line fade-up d2" />
        <div className="contact-wrapper">

          {/* Left: info */}
          <div className="contact-info fade-up d2">
            <h3>Open to opportunities.</h3>
            <p>
              I'm currently seeking opportunities as a Junior/Entry-level DevOps Engineer.
              Open to full-time and internship roles where I can contribute, learn, and grow. Feel free to reach out. Will response in 24 hours.
            </p>
            <div className="contact-links">
              {LINKS.map(({ icon, label, val, href }) => (
                <a className="contact-link" href={href} key={label}>
                  <span className="link-icon">{icon}</span>
                  <span>
                    <span className="link-label">{label}</span>
                    {val}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="fade-up d3">
            {sent ? (
              <div className="success-msg">
                ✓ Message received!<br/>
                I'll get back to you within 24 hours.<br/>
                <span style={{ color: "var(--muted)", fontSize: "0.78rem" }}>— {PROFILE.name}</span>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label>NAME *</label>
                    <input required value={form.name} onChange={update("name")} placeholder="Your full name" />
                  </div>
                  <div className="field">
                    <label>EMAIL *</label>
                    <input type="email" required value={form.email} onChange={update("email")} placeholder="your@email.com" />
                  </div>
                </div>
                <div className="field">
                  <label>SUBJECT *</label>
                  <select required value={form.subject} onChange={update("subject")}>
                    <option value="">Select a topic...</option>
                    <option>Full-time opportunity</option>
                    <option>Contract / Freelance</option>
                    <option>Open source collaboration</option>
                    <option>Infrastructure consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label>MESSAGE *</label>
                  <textarea required value={form.message} onChange={update("message")} placeholder="Tell me about your project or role..." />
                </div>
                <button className="form-submit" type="submit" disabled={sending}>
                  {sending ? <span className="sending-dots">SENDING</span> : "SEND MESSAGE →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

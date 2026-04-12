import './App.css';

const EXPERIENCE = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Nova Labs',
    period: '2023 — Present',
    summary:
      'Building high-performance React interfaces, design systems, and product experiences used by 100K+ users.',
  },
  {
    role: 'Software Engineer',
    company: 'Orbit Tech',
    period: '2020 — 2023',
    summary:
      'Developed full-stack features with React, Node.js, and PostgreSQL while mentoring junior developers.',
  },
  {
    role: 'Associate Developer',
    company: 'Pixel Foundry',
    period: '2018 — 2020',
    summary:
      'Delivered responsive websites and web apps focused on performance, accessibility, and SEO.',
  },
];

const PROJECTS = [
  {
    name: 'FinTrack Dashboard',
    detail: 'A finance analytics platform with live charts, role-based access, and automated reports.',
  },
  {
    name: 'TalentHub',
    detail: 'Hiring workflow app that reduced screening time by 40% through streamlined automation.',
  },
  {
    name: 'ShopFlow Commerce',
    detail: 'Headless e-commerce storefront with fast SSR and conversion-focused checkout UX.',
  },
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="topbar">
          <span className="brand">HR</span>
          <div className="links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Software Engineer · Sri Lanka</p>
          <h1>Hirusha Rukmal</h1>
          <p className="intro">
            I design and develop modern web products with clean architecture, thoughtful UX, and measurable business impact.
          </p>
          <a className="cta" href="#contact">
            Let&apos;s Work Together
          </a>
        </div>
      </header>

      <main>
        <section id="about" className="section split">
          <div>
            <p className="section-label">About</p>
            <h2>Focused on building elegant digital experiences.</h2>
          </div>
          <p>
            I&apos;m a software engineer specialized in React and Node.js, passionate about creating products that are fast,
            accessible, and maintainable. I enjoy collaborating with teams, solving complex product challenges, and turning
            ideas into polished web experiences.
          </p>
        </section>

        <section id="experience" className="section">
          <p className="section-label">Experience</p>
          <div className="timeline">
            {EXPERIENCE.map((item) => (
              <article key={item.role} className="card">
                <div className="row">
                  <h3>{item.role}</h3>
                  <span>{item.period}</span>
                </div>
                <p className="company">{item.company}</p>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-label">Projects</p>
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <article key={project.name} className="project">
                <h3>{project.name}</h3>
                <p>{project.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <p className="section-label">Contact</p>
        <h2>hirusha.rukmal@email.com</h2>
        <p>Colombo, Sri Lanka · Available for freelance and full-time opportunities</p>
      </footer>
    </div>
  );
}

export default App;

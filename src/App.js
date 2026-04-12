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
    link: '#',
  },
  {
    name: 'TalentHub',
    detail: 'Hiring workflow app that reduced screening time by 40% through streamlined automation.',
    link: '#',
  },
  {
    name: 'ShopFlow Commerce',
    detail: 'Headless e-commerce storefront with fast SSR and conversion-focused checkout UX.',
    link: '#',
  },
];

function App() {
  return (
    <div className="portfolio">
      <aside className="sidebar">
        <div>
          <p className="name">Hirusha Rukmal</p>
          <h1>Software Engineer</h1>
          <p className="tagline">I build reliable, accessible and performant digital experiences for the web.</p>
        </div>

        <nav className="sidebar-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="socials" id="contact">
          <a href="mailto:hirusha.rukmal@email.com">Email</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </aside>

      <main className="content">
        <section id="about" className="panel">
          <p>
            I&apos;m a software engineer with a strong focus on frontend development and product thinking. I enjoy turning
            complex requirements into clean interfaces that feel effortless to use while staying easy to maintain.
          </p>
          <p>
            Over the years, I&apos;ve worked across startups and product teams, building applications with React, Node.js,
            and modern web tooling. I care deeply about quality, collaboration, and continuous improvement.
          </p>
          <p>
            Outside work, I explore UI patterns, performance optimization, and practical architecture decisions that keep
            products moving quickly without sacrificing long-term stability.
          </p>
        </section>

        <section id="experience" className="panel cards">
          {EXPERIENCE.map((item) => (
            <article className="card" key={item.role}>
              <span className="period">{item.period}</span>
              <div>
                <h2>
                  {item.role} · <span>{item.company}</span>
                </h2>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </section>

        <section id="projects" className="panel cards">
          {PROJECTS.map((project) => (
            <a className="card project-card" href={project.link} key={project.name}>
              <div>
                <h2>{project.name}</h2>
                <p>{project.detail}</p>
              </div>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;

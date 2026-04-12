import './App.css';
import navIcon1 from './assets/img/nav-icon1.svg';
import navIcon2 from './assets/img/nav-icon2.svg';
import navIcon3 from './assets/img/nav-icon3.svg';

const qualifications = [
  'BSc (Hons) in Software Engineering',
  'Strong foundation in React, JavaScript, and modern front-end development',
  'Experience building responsive, user-centered web applications',
  'Comfortable collaborating with Git, REST APIs, and agile workflows',
];

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern personal website to showcase skills, achievements, and project work with clean design and smooth section navigation.',
    stack: 'React, CSS, Bootstrap',
  },
  {
    title: 'Task Management App',
    description:
      'A productivity web app with task tracking, status filtering, and deadline management focused on clarity and performance.',
    stack: 'React, Node.js, Express',
  },
  {
    title: 'E-commerce UI Prototype',
    description:
      'A responsive storefront interface featuring product grids, cart interactions, and reusable UI components.',
    stack: 'React, JavaScript, REST API',
  },
];

function App() {
  return (
    <div className="app">
      <header className="hero" id="home">
        <nav className="nav">
          <a href="#home" className="brand">Hirusha Rukmal</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#qualifications">Qualifications</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="tag">Software Engineer • Front-End Developer</p>
          <h1>Hi, I&apos;m Hirusha.</h1>
          <p>
            I build fast, accessible, and visually polished web experiences. This
            portfolio highlights my qualifications and selected projects.
          </p>
          <a href="#projects" className="cta">View My Work</a>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <h2>About Me</h2>
          <p>
            I am a passionate developer focused on creating reliable applications
            with clean code and intuitive user experiences. I enjoy turning ideas
            into practical products and continuously improving through real-world
            projects.
          </p>
        </section>

        <section className="section" id="qualifications">
          <h2>Qualifications</h2>
          <ul className="qualifications-list">
            {qualifications.map((qualification) => (
              <li key={qualification}>{qualification}</li>
            ))}
          </ul>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.stack}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <h2>Let&apos;s Connect</h2>
        <p>Open to internships, freelance work, and collaborative projects.</p>
        <div className="socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <img src={navIcon1} alt="GitHub" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <img src={navIcon2} alt="LinkedIn" />
          </a>
          <a href="mailto:hello@example.com" aria-label="Send email">
            <img src={navIcon3} alt="Email" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

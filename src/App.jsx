import { useEffect, useMemo, useState } from 'react'
import {
  FaArrowDown,
  FaCloud,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaFacebook,
  FaFigma,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaPhone,
  FaReact,
} from 'react-icons/fa6'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiGit, SiPostman, SiPython, SiTypescript, SiUipath } from 'react-icons/si'

const technologies = [
  { label: 'JavaScript', icon: IoLogoJavascript },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'React', icon: FaReact },
  { label: 'Python', icon: SiPython },
  { label: 'Postman', icon: SiPostman },
  { label: 'Git', icon: SiGit },
  { label: 'Figma', icon: FaFigma },
  { label: 'UiPath', icon: SiUipath },
  { label: 'Azure', icon: FaCloud },
  { label: 'HTML / CSS', icon: FaCode },
]

const experience = [
  {
    title: 'Software Engineering Trainee LOLC Technologies Limited',
    period: '2021 — 2024',
    description:
      'Delivered responsive enterprise UI components using ReactJS and TypeScript, collaborated with design and product teams in Figma, performed API validation and regression testing across 15+ REST endpoints, and built UiPath workflows that reduced manual effort and improved turnaround time.',
    tags: ['ReactJS', 'TypeScript', 'Postman', 'UiPath', 'Figma'],
    side: 'left',
  },
  {
    title: 'Banking Intern Commercial Bank of Ceylon',
    period: '2019 — 2020',
    description:
      'Supported user acceptance testing for digital banking platforms, assisted with defect reporting and cross-team coordination, and contributed to operational reporting and compliance documentation across departments.',
    tags: ['UAT', 'Testing', 'Documentation', 'Coordination'],
    side: 'right',
  },
]

const projects = [
  {
    title: 'AFL Player Tracking & Crowd Monitoring System',
    description:
      'Active frontend developer on a Deakin Redback Operations project focused on AI and computer vision for crowd safety monitoring and player tracking during AFL matches.',
    tags: ['React', 'Frontend', 'AI', 'Computer Vision'],
    side: 'left',
  },
  {
    title: 'AI Assisted Navigation Device',
    description:
      'Designed an ethical, accessible, and privacy-conscious indoor navigation solution for students with disabilities at Deakin University with Mekong Inclusive Ventures.',
    tags: ['Accessibility', 'UX', 'AI', 'Design'],
    side: 'right',
  },
  {
    title: 'Conversational AI Chatbot',
    description:
      'Designed and developed an AI-based chatbot in Python capable of handling structured conversational queries for final-year research work.',
    tags: ['Python', 'AI', 'NLP', 'Chatbot'],
    side: 'left',
  },
  {
    title: 'Food Delivery Mobile Application',
    description:
      'Developed application features with a focus on user experience and backend integration using Swift and Ruby.',
    tags: ['Swift', 'Ruby', 'Mobile', 'UX'],
    side: 'right',
  },
  {
    title: 'Research Project Management System',
    description:
      'Built a full-stack web-based system using JavaScript and CSS to support academic research workflow management.',
    tags: ['JavaScript', 'CSS', 'Full Stack'],
    side: 'left',
  },
]

const stats = [
  { value: '5+', label: 'Projects' },
  { value: '10+', label: 'Technologies' },
  { value: '3+ Years', label: 'Experience' },
  { value: 'Always', label: 'Learning' },
]

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const sectionIds = useMemo(() => ['about', 'experience', 'projects', 'contact'], [])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-25% 0px -50% 0px',
        threshold: [0.15, 0.3, 0.5],
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [sectionIds])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formPayload = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: `Portfolio enquiry from ${formData.name || 'Website visitor'}`,
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formPayload),
      })

      const result = await response.json()

      if (result.success) {
        alert('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      } else {
        console.error('Web3Forms error:', result)
        alert('Failed to send message.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('Failed to send message.')
    }
  }


  return (
    <div className="portfolio-shell">
      <header className="top-nav-wrap">
        <nav className="top-nav" aria-label="Primary">
          <a className={activeSection === 'about' ? 'active' : ''} href="#about">
            About Me
          </a>
          <a className={activeSection === 'experience' ? 'active' : ''} href="#experience">
            Experience
          </a>
          <a className={activeSection === 'projects' ? 'active' : ''} href="#projects">
            Projects
          </a>
          <a className={activeSection === 'contact' ? 'active' : ''} href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <h1>
              Hirusha
              <br />
              Rukmal
            </h1>
            <h2>
              Software Engineer | Frontend & Cloud
            </h2>
            <p>
              Software Engineering graduate with 3+ years of industry experience in frontend development, API testing,
              automation, and modern web delivery. Currently completing a Master of Information Technology at Deakin
              University.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                View Projects
              </a>
              <a className="button button-light" href="#contact">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="deploy-editor-hero">
              <div className="editor-shell">
                <div className="editor-topbar">
                  <span className="topbar-dot" />
                  <span className="topbar-dot" />
                  <span className="topbar-dot" />
                  <div className="topbar-title">deployment.log</div>
                </div>

                <div className="editor-layout">
                  <aside className="editor-sidebar">
                    <span className="sidebar-item active" />
                    <span className="sidebar-item" />
                    <span className="sidebar-item" />
                    <span className="sidebar-item" />
                  </aside>

                  <div className="editor-main">
                    <div className="editor-tabs">
                      <div className="editor-tab active">pipeline.yml</div>
                      <div className="editor-tab">Dockerfile</div>
                      <div className="editor-tab">kubectl.sh</div>
                    </div>

                    <div className="code-panel">
                      <div className="code-line w-92" />
                      <div className="code-line w-70" />
                      <div className="code-line w-84" />
                      <div className="code-line w-58" />
                      <div className="code-line w-76" />
                    </div>

                    <div className="terminal-panel">
                      <div className="terminal-header">
                        <span className="terminal-title">Deploying to production</span>
                        <span className="terminal-status live">
                          <span className="status-ping" />
                          Live
                        </span>
                      </div>

                      <div className="terminal-lines">
                        <div className="term-row delay-1">
                          <span className="term-prefix">$</span>
                          <span className="term-text">npm run build</span>
                          <span className="term-state ok">done</span>
                        </div>

                        <div className="term-row delay-2">
                          <span className="term-prefix">$</span>
                          <span className="term-text">docker build -t portfolio .</span>
                          <span className="term-state ok">done</span>
                        </div>

                        <div className="term-row delay-3">
                          <span className="term-prefix">$</span>
                          <span className="term-text">docker push registry/portfolio</span>
                          <span className="term-state ok">done</span>
                        </div>

                        <div className="term-row delay-4">
                          <span className="term-prefix">$</span>
                          <span className="term-text">kubectl apply -f deployment.yaml</span>
                          <span className="term-state running">running</span>
                        </div>

                        <div className="progress-wrap delay-5">
                          <div className="progress-bar" />
                        </div>

                        <div className="term-row delay-6">
                          <span className="term-prefix">$</span>
                          <span className="term-text">rollout status deployment/portfolio</span>
                          <span className="term-state pending">waiting</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="deploy-float deploy-float-1">Build</div>
              <div className="deploy-float deploy-float-2">Push</div>
              <div className="deploy-float deploy-float-3">Deploy</div>
            </div>
          </div>

          <a className="scroll-indicator" href="#technologies">
            <span>Scroll to explore</span>
            <FaArrowDown />
          </a>
        </section>

        <section className="section technologies-section" id="technologies">
          <div className="content-wrap">
            <h2 className="section-title">Technologies</h2>
            <div className="technology-grid">
              {technologies.map((technology) => {
                const Icon = technology.icon
                return (
                  <article className="technology-card" key={technology.label}>
                    <div className="technology-icon">
                      <Icon />
                    </div>
                    <p>{technology.label}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="content-wrap about-grid">
            <div className="about-copy-block">
              <h2 className="section-title">About Me</h2>
              <p className="about-lead">
                I build scalable web applications and practical software solutions, with strengths across frontend
                engineering, API testing, automation, and cloud-focused development.
              </p>
              <p>
                I am a software engineering graduate currently completing a Master of Information Technology at Deakin
                University, expected in September 2026. My professional experience includes ReactJS and TypeScript
                development, REST API testing with Postman, and automation with UiPath.
              </p>
              <p>
                I enjoy creating user-friendly, reliable systems and working on projects that solve real problems using
                modern software engineering practices. I am especially interested in graduate and entry-level software
                engineering opportunities in Australia.
              </p>
              <a className="button button-dark resume-button" href="/Hirusha-Rukmal-Resume.pdf" target="_blank" rel="noreferrer">
                <FaDownload />
                Download Resume
              </a>
            </div>

            <div className="stats-grid">
              {stats.map((item) => (
                <article className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section timeline-section" id="experience">
          <div className="content-wrap">
            <h2 className="section-title">Experience</h2>
            <div className="timeline-layout">
              <div className="timeline-line" />
              {experience.map((item, index) => (
                <article className={`timeline-card ${item.side}`} key={item.title} style={{ '--item-index': index }}>
                  <div className="timeline-dot" />
                  <div className="timeline-panel">
                    <h3>{item.title}</h3>
                    <p className="timeline-period">{item.period}</p>
                    <p>{item.description}</p>
                    <div className="tag-row">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section timeline-section" id="projects">
          <div className="content-wrap">
            <h2 className="section-title">Projects</h2>
            <div className="timeline-layout projects-layout">
              <div className="timeline-line" />
              {projects.map((project, index) => (
                <article className={`timeline-card ${project.side}`} key={project.title} style={{ '--item-index': index }}>
                  <div className="timeline-dot" />
                  <div className="timeline-panel project-panel">
                    <div className="project-head">
                      <h3>{project.title}</h3>
                      <a aria-label="GitHub placeholder" className="icon-link" href="https://github.com" target="_blank" rel="noreferrer">
                        <FaGithub />
                      </a>
                    </div>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="content-wrap contact-wrap">
            <div className="contact-header">
              <h2 className="section-title centered">Let&apos;s Connect</h2>
              <p>Have a project in mind or want to collaborate? Get in touch!</p>
            </div>

            <div className="contact-grid">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button className="button button-dark full-width" type="submit">
                  Send Message
                </button>
              </form>

              <aside className="contact-side">
                <h3>Connect With Me</h3>
                <div className="social-links">
                  <a href="https://www.instagram.com/_.hiruu.ru._/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook.com/hirusha.rukmal.7/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaFacebook />
                  </a>
                  <a href="https://www.linkedin.com/in/hirusharukmal/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/HirushaRukmal" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaGithub />
                  </a>
                  <a href="https://medium.com/@hirusharukmal266" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaMedium />
                  </a>
                  <a href="mailto:hirusharukmal266@gmail.com" aria-label="Email">
                    <FaEnvelope />
                  </a>
                  {/* <a href="tel:+61418735330" aria-label="Phone">
                    <FaPhone />
                  </a> */}
                </div>
                <div className="contact-meta">
                  <p>
                    <HiOutlineLocationMarker />
                    <span>Location: Melbourne, Australia</span>
                  </p>
                  <p>
                    <FaEnvelope />
                    <span>Status: Open to graduate and entry-level software engineering roles</span>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <h4>Hirusha Rukmal Hewageeganage</h4>
          <p>Software Engineer | Frontend | Cloud</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="back-top" href="#home">
          ↑ Back to Top
        </a>
      </footer>
    </div>
  )
}

export default App

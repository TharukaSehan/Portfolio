import { useEffect, useMemo, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import profileImage from './assets/img/Tharuka.png'
import shanthaTourShot1 from './assets/img/ST1.png'
import shanthaTourShot2 from './assets/img/ST2.png'
import shanthaTourShot3 from './assets/img/ST3.png'
import shanthaTradersShot1 from './assets/img/Shantha-1.png'
import shanthaTradersShot2 from './assets/img/Shantha-2.png'
import shanthaTradersShot3 from './assets/img/Shantha-3.png'
import shanthaTradersShot4 from './assets/img/shantha-4.png'

const navItems = [
  { id: 'hero', label: 'Home', icon: 'bi-house' },
  { id: 'about', label: 'About', icon: 'bi-person' },
  { id: 'skills', label: 'Skills', icon: 'bi-lightning-charge' },
  { id: 'development', label: 'Development', icon: 'bi-code-slash' },
  { id: 'contact', label: 'Contact', icon: 'bi-envelope' },
]

const showDesignSection = false

const typedWords = ['UI/UX Designer', 'Frontend Developer']

const skillGroups = [
  {
    title: 'Graphic Design',
    skills: [
      { name: 'Adobe Photoshop', value: 95 },
      { name: 'Adobe Illustrator', value: 92 },
      { name: 'Typography', value: 88 },
    ],
  },
  {
    title: 'UI/UX Design',
    skills: [
      { name: 'Figma', value: 84 },
      { name: 'Wireframing', value: 86 },
      { name: 'Responsive Design', value: 90 },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5 and CSS3', value: 88 },
      { name: 'JavaScript', value: 76 },
      { name: 'React', value: 68 },
    ],
  },
  {
    title: 'Programming and Tools',
    skills: [
      { name: 'Git and GitHub', value: 80 },
      { name: 'Java', value: 72 },
      { name: 'SQL', value: 70 },
    ],
  },
]

const developmentProjects = [
  {
    badge: 'Web Application',
    type: 'Web Application',
    title: 'RCube - Rubik Solver Platform',
    description:
      'An interactive Rubik cube solver platform with 3D visualization, camera scanning, manual input mode, and backend-powered solving logic.',
    tags: ['React', 'Three.js', 'FastAPI', 'OpenCV', 'Kociemba'],
    images: [shanthaTourShot1, shanthaTourShot2, shanthaTourShot3],
    live: '#',
    code: 'https://github.com/TharukaSehan/RCube',
  },
  {
    badge: 'Tourism Platform',
    type: 'Web Application',
    title: 'Tours - Travel Booking Platform',
    description:
      'A travel and tour booking platform designed for Shantha Tours, featuring curated destinations, package browsing, and inquiry-based booking flows.',
    tags: ['React', 'Node.js', 'MongoDB', 'Responsive UI'],
    images: [shanthaTourShot1, shanthaTourShot2, shanthaTourShot3],
    live: 'https://tharukasehan.github.io/ShanthaTours/',
    code: 'https://github.com/TharukaSehan/ShanthaTours',
  },
  {
    badge: 'Ecommerce Website',
    type: 'Web Application',
    title: 'Shantha Traders Ecommerce Site',
    description: 'An ecommerce website for an imitation fashion jewellery business.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React'],
    images: [shanthaTradersShot1, shanthaTradersShot2, shanthaTradersShot3, shanthaTradersShot4],
    live: 'https://shantha-app.vercel.app/',
    code: 'https://github.com/TharukaSehan/shantha-app',
  },
]

const designProjects = [
  {
    badge: 'Branding',
    title: 'Studio PixelAura Brand Identity',
    description: 'Complete brand identity system including logo, color, typography and visual assets.',
    client: 'Studio PixelAura',
    tags: ['Adobe Illustrator', 'Adobe Photoshop'],
    images: [
      'https://manusha-sathsara.github.io/portfolio/projects/design/branding/studio-pixelaura-1.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/branding/studio-pixelaura-2.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/branding/studio-pixelaura-3.jpg',
    ],
  },
  {
    badge: 'Logo Design',
    title: 'Professional Logo Collection',
    description: 'Custom logos created for multiple industries and business categories.',
    client: 'Various Clients',
    tags: ['Adobe Illustrator', 'Adobe Photoshop'],
    images: [
      'https://manusha-sathsara.github.io/portfolio/projects/design/logos/logo-collection-1.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/logos/logo-collection-2.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/logos/logo-collection-3.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/logos/logo-collection-4.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/logos/logo-collection-5.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/logos/logo-collection-6.jpg',
    ],
  },
  {
    badge: 'Marketing',
    title: 'Marketing Flyer Designs',
    description: 'Promotional flyer designs with strong hierarchy and conversion-focused visuals.',
    client: 'Local Businesses',
    tags: ['Adobe Photoshop', 'Adobe Illustrator'],
    images: [
      'https://manusha-sathsara.github.io/portfolio/projects/design/marketing/flyers-1.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/marketing/flyers-2.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/marketing/flyers-3.jpg',
    ],
  },
  {
    badge: 'Print Design',
    title: 'Custom Print Design Collection',
    description: 'Professional print collateral including cards, brochures and poster systems.',
    client: 'Corporate Clients',
    tags: ['Adobe Illustrator', 'Adobe Photoshop'],
    images: [
      'https://manusha-sathsara.github.io/portfolio/projects/design/print/print-1.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/print/print-2.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/print/print-3.jpg',
    ],
  },
  {
    badge: 'Social Media',
    title: 'Social Media Design Templates',
    description: 'Post templates and graphics designed to boost engagement and brand consistency.',
    client: 'Digital Marketing',
    tags: ['Adobe Photoshop', 'Adobe Illustrator'],
    images: [
      'https://manusha-sathsara.github.io/portfolio/projects/design/social-media/social-posts-1.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/social-media/social-posts-2.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/social-media/social-posts-3.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/social-media/social-posts-4.jpg',
    ],
  },
  {
    badge: 'Poster Design',
    title: 'Event Poster Series',
    description: 'Creative event posters with vibrant composition and strong typographic impact.',
    client: 'SUSL FOC',
    tags: ['Adobe Illustrator', 'Adobe Photoshop'],
    images: [
      'https://manusha-sathsara.github.io/portfolio/projects/design/posters/event-poster-1.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/posters/event-poster-2.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/posters/event-poster-3.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/posters/event-poster-4.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/posters/event-poster-5.jpg',
      'https://manusha-sathsara.github.io/portfolio/projects/design/posters/event-poster-6.jpg',
    ],
  },
]

function ImageCarousel({ images, title }) {
  const [index, setIndex] = useState(0)
  const total = images.length

  const next = () => setIndex((value) => (value + 1) % total)
  const prev = () => setIndex((value) => (value - 1 + total) % total)

  return (
    <div className="carousel-wrap">
      <div className="image-view group-hover-parent">
        <img src={images[index]} alt={`${title} - ${index + 1}`} />
        <button className="arrow left" onClick={prev} aria-label="Previous image" type="button">
          <i className="bi bi-chevron-left" />
        </button>
        <button className="arrow right" onClick={next} aria-label="Next image" type="button">
          <i className="bi bi-chevron-right" />
        </button>

        <div className="dots">
          {images.map((_, imageIndex) => (
            <button
              key={`${title}-dot-${imageIndex}`}
              className={imageIndex === index ? 'active' : ''}
              onClick={() => setIndex(imageIndex)}
              type="button"
              aria-label={`Go to image ${imageIndex + 1}`}
            />
          ))}
        </div>
        <div className="count">{index + 1} / {total}</div>
      </div>

      <div className="thumbs">
        {images.map((image, imageIndex) => (
          <button
            key={`${title}-thumb-${imageIndex}`}
            onClick={() => setIndex(imageIndex)}
            className={imageIndex === index ? 'active' : ''}
            type="button"
          >
            <img src={image} alt={`Thumbnail ${imageIndex + 1}`} />
          </button>
        ))}
      </div>
    </div>
  )
}

function useTypedText(words, speed = 88, eraseSpeed = 44, hold = 1400) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const delay = isDeleting ? eraseSpeed : speed

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)

        if (next === current) {
          window.setTimeout(() => setIsDeleting(true), hold)
        }
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)

        if (next.length === 0) {
          setIsDeleting(false)
          setWordIndex((index) => (index + 1) % words.length)
        }
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [words, wordIndex, text, isDeleting, speed, eraseSpeed, hold])

  return text
}

function App() {
  const typed = useTypedText(typedWords)
  const [activeId, setActiveId] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [skillAnimate, setSkillAnimate] = useState(false)

  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 180

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue

        const top = section.offsetTop
        const bottom = top + section.offsetHeight

        if (offset >= top && offset < bottom) {
          setActiveId(id)
        }
      }

      const skills = document.getElementById('skills')
      if (skills && offset > skills.offsetTop + 60) {
        setSkillAnimate(true)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  const closeMenu = () => setMenuOpen(false)
  const primaryNavItems = navItems.filter((item) => item.id !== 'contact')

  return (
    <div className="page-shell">
      <button className="mobile-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
        <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} />
      </button>

      <header className="desktop-navbar">
        <div className="desktop-brand">Tharuka Pathirana</div>
        <nav className="desktop-nav-links">
          {primaryNavItems.map((item) => (
            <a
              key={`desktop-${item.id}`}
              href={`#${item.id}`}
              className={activeId === item.id ? 'active' : ''}
            >
              <i className={`bi ${item.icon}`} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <a href="#contact" className="desktop-contact-btn"> 
          <i className="bi bi-envelope" />
          <span>Contact</span>
        </a>
      </header>

      <aside className={`sidebar ${menuOpen ? 'show' : ''}`}>
        <div className="profile-ring">
          <img src={profileImage} alt="Tharuka Pathirana" className="profile-image" />
        </div>
        <h1>Tharuka Pathirana</h1>
        <p>Full Stack Designer</p>

        <div className="social-row">
          <a href="#" aria-label="GitHub"><i className="bi bi-github" /></a>
          <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
          <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
          <a href="#" aria-label="Behance"><i className="bi bi-behance" /></a>
        </div>

        <nav>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? 'active' : ''}
              onClick={closeMenu}
            >
              <i className={`bi ${item.icon}`} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <main>
        <section id="hero" className="hero section">
          <div className="orb orb-a" />
          <div className="orb orb-b" />

          <div className="hero-content" data-aos="fade-up">
            <p className="eyebrow">Hello, I am</p>
            <h2>Tharuka Pathirana</h2>
            <h3>
              I&apos;m a <span>{typed}</span>
              <b className="caret">|</b>
            </h3>
            <p>
              I am a passionate developer with dedicated work progress and motivation.
            </p>
            <div className="cta-row">
              <a className="btn-primary" href="#contact">Get In Touch</a>
              <a className="btn-ghost" href="#development">Download CV</a>
            </div>
          </div>

          <div className="hero-image" data-aos="fade-left" data-aos-delay="200">
            <div className="image-ring">
              <img src={profileImage} alt="Tharuka Pathirana" />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <header className="section-head" data-aos="fade-up">
            <h2>About Me</h2>
            <p>
              A motivated technology student focused on building practical digital solutions with dedication,
              consistency, and strong growth mindset.
            </p>
          </header>

          <div className="about-grid about-layout">
            <article className="about-panel" data-aos="fade-up" data-aos-delay="80">
              <h3>Education and Background</h3>
              <div className="about-item">
                <div className="about-icon"><i className="bi bi-building" /></div>
                <div>
                  <h4>School Education</h4>
                  <p>Studied at Dharmaraja College, Kandy.</p>
                </div>
              </div>

              <div className="about-item">
                <div className="about-icon"><i className="bi bi-mortarboard" /></div>
                <div>
                  <h4>Higher Education</h4>
                  <p>Completed Bachelor of Information and Communication Technology at AEU.</p>
                </div>
              </div>

              <h4 className="about-subhead">Focus Areas</h4>
              <div className="chips">
                <span>Information Systems</span>
                <span>Software Development</span>
                <span>Frontend Development</span>
                <span>Problem Solving</span>
              </div>
            </article>

            <article className="about-panel" data-aos="fade-up" data-aos-delay="160">
              <h3>Current Academic Journey</h3>
              <div className="about-item">
                <div className="about-icon"><i className="bi bi-journal-bookmark" /></div>
                <div>
                  <h4>Current Status</h4>
                  <p>Currently an undergraduate at Sabaragamuwa University following BSc Information Systems.</p>
                </div>
              </div>

              <div className="about-item">
                <div className="about-icon"><i className="bi bi-calendar-event" /></div>
                <div>
                  <h4>Academic Year</h4>
                  <p>2nd year undergraduate with continued progress in technical and professional development.</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <header className="section-head" data-aos="fade-up">
            <h2>Skills and Expertise</h2>
            <p>Current strengths and learning focus areas.</p>
          </header>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article key={group.title} data-aos="fade-up" data-aos-delay={90 + index * 70}>
                <h3>{group.title}</h3>
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-meta">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="track">
                      <div
                        className="fill"
                        style={{ width: skillAnimate ? `${skill.value}%` : '4%' }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                ))}
              </article>
            ))}
          </div>

          <div className="tools-card" data-aos="fade-up" data-aos-delay="280">
            <h3 className="gradient-text">Technologies &amp; Tools</h3>
            <p>A glimpse of the technologies and tools I work with</p>
            <div className="tag-cloud">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'Java', 'SQL', 'Linux', 'Photoshop', 'Illustrator', 'Figma'].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="development" className="section">
          <header className="section-head" data-aos="fade-up">
            <h2 className="gradient-text">Development Projects</h2>
            <p>Showcasing frontend builds with high attention to motion and UX quality.</p>
          </header>

          <div className="project-stack two-col">
            {developmentProjects.map((project, index) => (
              <article key={project.title} className="full-card" data-aos="fade-up" data-aos-delay={90 + index * 90}>
                <ImageCarousel images={project.images} title={project.title} />
                <div className="content">
                  <div className="badge red">{project.badge}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chips">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="actions">
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">Live Demo</a>
                    <a href={project.code} target="_blank" rel="noreferrer" className="btn-ghost">Code</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="more-card" data-aos="fade-up" data-aos-delay="200">
            <h3 className="gradient-text">More Projects Coming Soon!</h3>
            <p>
              I&apos;m currently working on several exciting projects including advanced web applications and full-stack
              solutions.
            </p>
            <div className="chips">
              <span>E-Commerce Platform</span>
              <span>Learning Management System</span>
              <span>Mobile App Development</span>
            </div>
          </div>
        </section>

        {showDesignSection && (
          <section id="design" className="section">
            <header className="section-head" data-aos="fade-up">
              <h2 className="gradient-text">Design Portfolio</h2>
              <p>Graphic design, branding, and visual communication work categories.</p>
            </header>

            <div className="project-stack two-col">
              {designProjects.map((project, index) => (
                <article key={project.title} className="full-card" data-aos="fade-up" data-aos-delay={90 + index * 60}>
                  <ImageCarousel images={project.images} title={project.title} />
                  <div className="content">
                    <div className="badge orange">{project.badge}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="client">Client: {project.client}</div>
                    <div className="chips">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <button type="button" className="btn-primary full">View Project</button>
                  </div>
                </article>
              ))}
            </div>

            <div className="services-strip" data-aos="fade-up" data-aos-delay="120">
              <h3 className="gradient-text">Design Services</h3>
              <p>Professional design solutions for your business needs</p>
              <div className="service-grid">
                {[
                  ['Logo Design', 'Unique brand identities & creative logos'],
                  ['Print Design', 'Flyers, brochures, business cards'],
                  ['Digital Design', 'Social media graphics & web assets'],
                  ['Brand Identity', 'Complete brand packages & guidelines'],
                ].map(([title, text], index) => (
                  <article key={title} data-aos="zoom-in" data-aos-delay={80 + index * 40}>
                    <div className="icon-dot"><i className="bi bi-palette" /></div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="contact" className="section contact-wrap">
          <header className="section-head" data-aos="fade-up">
            <h2 className="gradient-text">Get In Touch</h2>
            <p>Ready to create something bold together? Send a message.</p>
          </header>

          <div className="contact-grid">
            <article className="contact-card" data-aos="fade-right" data-aos-delay="100">
              <h3>Let us connect</h3>
              <p><i className="bi bi-envelope" /> tharukapathirana0@gmail.com</p>
              <p><i className="bi bi-telephone" /> +94 71 176 1686</p>
              <p><i className="bi bi-geo-alt" /> Central Province, Sri Lanka</p>
              <div className="social-row left">
                <a href="#" aria-label="GitHub"><i className="bi bi-github" /></a>
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
                <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
                <a href="#" aria-label="Behance"><i className="bi bi-behance" /></a>
                <a href="#" aria-label="Whatsapp"><i className="bi bi-whatsapp" /></a>
              </div>
            </article>

            <form className="contact-card form" data-aos="fade-left" data-aos-delay="180">
              <input placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input placeholder="Subject" required />
              <textarea rows="6" placeholder="Message" required />
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>

          <div className="more-card" data-aos="fade-up" data-aos-delay="180">
            <h3 className="gradient-text">Ready to Start Your Project?</h3>
            <p>Whether you need web development or UI/UX design, I am here to help.</p>
            <div className="actions center">
              <a className="btn-primary" href="mailto:manushasj111@gmail.com">Email Me</a>
              <a className="btn-ghost" href="#">WhatsApp</a>
            </div>
          </div>
        </section>

        <footer>
          <div className="foot-grid">
            <div>
              <h3 className="gradient-text">Tharuka Pathirana</h3>
              <p>Full Stack Developer &amp; UI/UX Designer passionate about creating beautiful digital experiences.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#development">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h4>Services</h4>
              <a href="#development">Web Development</a>
              <a href="#design">UI/UX Design</a>
              <a href="#design">Brand Identity</a>
            </div>
          </div>
          <div className="copyright">© 2025 Tharuka Pathirana. Built with Next.js &amp; Tailwind CSS style in React.</div>
        </footer>
      </main>
    </div>
  )
}

export default App

import { Link } from 'react-router-dom'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Cloud, Database, Github, Linkedin, Mail, MoveUpRight, ShieldCheck, Terminal } from 'lucide-react'
import { profile, projects, skills } from '../data'

export default function Home() {
  return <>
    <section className="hero-section container">
      <div className="hero-copy">
        <div className="status-pill"><span className="status-dot" /> AUTOMATION ENGINEER <span className="pill-divider">/</span>TCS</div>
        <h1>Engineering the<br />future with <span className="gradient-text">automation & cloud</span></h1>
        <p className="hero-lede">Hi, I’m <strong>Manohar D</strong> — I build reliable workflows with Python, cloud-native tools, and data engineering practices.</p>
        <div className="hero-actions"><Link className="button button-primary" to="/projects">Explore my work <ArrowUpRight size={17}/></Link><Link className="button button-ghost" to="/contact">Get in touch <ArrowRight size={17}/></Link></div>
        <div className="hero-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href={`mailto:${profile.email}`}><Mail size={17}/> Email</a></div>
      </div>
      <div className="hero-art-wrap">
        <div className="art-glow" />
        <img className="hero-art" src="/images/hero-tech.svg" alt="Abstract cloud automation and connected technology illustration" />
        <div className="floating-card floating-card-top"><span className="floating-icon purple"><Terminal size={17}/></span><div><b>Python automation</b><small>Less manual work</small></div><span className="live-indicator" /></div>
        <div className="floating-card floating-card-bottom"><span className="floating-icon cyan"><Cloud size={17}/></span><div><b>Cloud-native</b><small>Docker · Kubernetes</small></div></div>
        <div className="orbit-label">BUILD · AUTOMATE · IMPROVE</div>
      </div>
      <a className="scroll-cue" href="#snapshot"><span><ArrowDownRight size={17}/></span> Scroll to explore</a>
    </section>

    <section id="snapshot" className="section-block section-soft"><div className="container">
      <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> WHAT I DO</div><h2>Turning complex workflows<br/>into <span className="gradient-text">practical solutions.</span></h2></div><Link className="text-link" to="/about">More about me <ArrowUpRight size={16}/></Link></div>
      <div className="focus-grid">
        <article className="focus-card"><div className="focus-icon purple"><Braces size={22}/></div><h3>Automation Engineering</h3><p>Python scripts and repeatable jobs designed to reduce manual effort and make operational workflows consistent.</p><span className="card-index">01 / AUTOMATE</span></article>
        <article className="focus-card"><div className="focus-icon blue"><Cloud size={22}/></div><h3>Cloud &amp; Containers</h3><p>Working with Docker, Kubernetes, Flask, and Amazon ECR for container-based application workflows.</p><span className="card-index">02 / DEPLOY</span></article>
        <article className="focus-card"><div className="focus-icon cyan"><Database size={22}/></div><h3>Data Quality</h3><p>ETL validation, SQL checks, and data reconciliation across cloud data migration projects.</p><span className="card-index">03 / VALIDATE</span></article>
      </div>
    </div></section>

    <section className="section-block"><div className="container">
      <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> TOOLKIT</div><h2>My technical <span className="gradient-text">stack.</span></h2></div><Link className="text-link" to="/about">All skills <ArrowUpRight size={16}/></Link></div>
      <div className="stack-panel">{skills.map((group, i) => <div className="stack-row" key={group.title}><span className="stack-number">0{i+1}</span><h3>{group.title}</h3><div className="tag-list">{group.items.slice(0,5).map(item => <span className="tag" key={item}>{item}</span>)}</div></div>)}</div>
    </div></section>

    <section className="section-block section-soft"><div className="container">
      <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> SELECTED WORK</div><h2>Projects with a <span className="gradient-text">purpose.</span></h2></div><Link className="text-link" to="/projects">View all projects <ArrowUpRight size={16}/></Link></div>
      <div className="project-grid home-projects">{projects.slice(0,3).map(project => <Link to="/projects" className="project-card" key={project.number}><div className="project-image"><img src={project.image} alt="" /><span className="project-number">{project.number}</span></div><div className="project-body"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><span className="project-open">Explore details <MoveUpRight size={16}/></span></div></Link>)}</div>
    </div></section>

    <section className="closing-cta container"><div className="cta-orb" /><div><div className="eyebrow"><span className="eyebrow-line"/> NEXT COLLABORATION</div><h2>Have a challenge worth<br/> <span className="gradient-text">automating?</span></h2><p>I’m always happy to connect with people building useful technology.</p></div><Link className="button button-primary" to="/contact">Let’s talk <ArrowUpRight size={17}/></Link></section>
  </>
}
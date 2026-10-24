import { ArrowUpRight, Braces, Cloud, Database, ShieldCheck } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { projects } from '../data'

const icons = [Braces, Cloud, Database, ShieldCheck]
export default function Projects() {
  return <div className="page-shell container">
    <PageIntro eyebrow="PROJECTS & FOCUS AREAS" title="Work shaped by" highlight="real problems." description="A selection of project areas reflecting the tools and engineering practices I use. Enterprise details are intentionally kept high-level to respect confidentiality." />
    <div className="project-grid projects-page">{projects.map((project, i) => { const Icon = icons[i]; return <article className="project-card project-card-static" key={project.number}><div className="project-image"><img src={project.image} alt={`${project.title} illustration`} /><span className="project-number">{project.number}</span><span className="project-image-icon"><Icon size={19}/></span></div><div className="project-body"><span className="project-category">{project.category}</span><h2>{project.title}</h2><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>})}</div>
    <div className="note-panel"><span className="note-icon">✦</span><div><h3>More projects are in progress</h3><p>I’m continuing to build and document practical projects in Python, cloud automation, and developer tooling. Check GitHub for public code and learning projects.</p></div><a className="text-link" href="https://github.com/Manohar-vibe-coder" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16}/></a></div>
  </div>
}
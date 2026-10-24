import { ArrowUpRight, Award, BadgeCheck, BrainCircuit, Cloud, Database, Github } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { certifications, profile } from '../data'

const icons = { cloud: Cloud, brain: BrainCircuit, github: Github, database: Database, badge: Award }
export default function Certifications() {
  return <div className="page-shell container">
    <PageIntro eyebrow="CERTIFICATIONS & LEARNING" title="Learning is part of" highlight="the process." description="Credentials and learning paths that support my growth across cloud, AI, developer tooling, and generative AI." />
    <div className="cert-intro-panel"><div className="cert-large-icon"><Award size={28}/></div><div><h2>Building a stronger foundation.</h2><p>I use structured learning to deepen my understanding, then connect the concepts to hands-on engineering practice.</p></div></div>
    <div className="certification-grid">{certifications.map((cert, i) => { const Icon = icons[cert.icon] || BadgeCheck; return <article className="certification-card" key={cert.name}><div className="cert-top"><span className={`cert-symbol tone-${i%4}`}><Icon size={22}/></span><span className="cert-status"><BadgeCheck size={14}/> Learning record</span></div><div className="cert-issuer">{cert.issuer}</div><h2>{cert.name}</h2><p>{cert.detail}</p><div className="cert-bottom"><span>Credential / learning path</span><span className="cert-arrow"><ArrowUpRight size={16}/></span></div></article>})}</div>
    <p className="fine-print">Note: This page lists the credentials and learning paths provided for the portfolio. Add official credential verification links where available, and only label an exam as completed after the credential has been issued.</p>
    <div className="closing-cta"><div><div className="eyebrow"><span className="eyebrow-line"/> KEEP IN TOUCH</div><h2>Always building the<br/><span className="gradient-text">next skill.</span></h2></div><a className="button button-primary" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17}/></a></div>
  </div>
}
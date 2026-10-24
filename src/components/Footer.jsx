import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return <footer className="footer"><div className="container footer-inner">
    <div><a className="wordmark" href="/"><span className="wordmark-mark">M</span><span className="wordmark-name">Ma<span className="accent">nohar</span></span></a><p>Building useful things with automation, cloud, and code.</p></div>
    <div className="footer-links">
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
      <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18}/></a>
      <a href="#top" aria-label="Back to top"><ArrowUpRight size={18}/></a>
    </div>
    <small>© {new Date().getFullYear()} Manohar D. Designed with care.</small>
  </div></footer>
}
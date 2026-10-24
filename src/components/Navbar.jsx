import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data'

const links = [
  ['/', 'Home'], ['/about', 'About'], ['/experience', 'Experience'],
  ['/projects', 'Projects'], ['/certifications', 'Certifications'], ['/contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <nav className="nav container">
       <Link className="wordmark" to="/" onClick={() => setOpen(false)}><img src="/images/Profile.jpg" alt="Manohar D" className="wordmark-photo"/><span className="wordmark-name">Ma<span className="accent">nohar</span></span></Link>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        <div className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <a className="nav-cta" href={profile.linkedin} target="_blank" rel="noreferrer">Let’s connect <ArrowUpRight size={15} /></a>
        </div>
      </nav>
    </header>
  )
}
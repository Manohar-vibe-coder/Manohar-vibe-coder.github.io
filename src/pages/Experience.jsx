import { BriefcaseBusiness, MapPin, CalendarDays } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { experience } from '../data'

export default function Experience() {
  return <div className="page-shell container">
    <PageIntro eyebrow="CAREER JOURNEY" title="Experience that" highlight="keeps evolving." description="My professional journey across automation engineering, data migration, testing, and software development." />
    <div className="experience-layout">
      <aside className="experience-aside"><div className="aside-sticky"><div className="eyebrow"><span className="eyebrow-line"/> CAREER SNAPSHOT</div><h2>Learning through<br/><span className="gradient-text">real-world work.</span></h2><p>Each role has helped me build a stronger foundation in software, data, and cloud engineering.</p><div className="career-stat"><BriefcaseBusiness size={19}/><div><b>Professional experience</b><span>TCS · SMC Technologies</span></div></div><div className="career-stat"><MapPin size={19}/><div><b>India</b><span>Chennai · Bengaluru · Coimbatore</span></div></div></div></aside>
      <div className="timeline">{experience.map((job, i) => <article className="timeline-item" key={job.role}><div className="timeline-marker"><span>{String(i+1).padStart(2,'0')}</span></div><div className="timeline-content"><div className="timeline-period"><CalendarDays size={14}/>{job.period}</div><h2>{job.role}</h2><div className="timeline-company">{job.company} <span>· {job.location}</span></div><ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul></div></article>)}</div>
    </div>
  </div>
}
import { ArrowUpRight, Braces, Cloud, Database, Gauge, ShieldCheck, Workflow } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { skills, profile } from '../data'

const strengths = [
  { icon: Braces, title: 'Automation mindset', text: 'I look for ways to turn repetitive work into predictable, reusable workflows.' },
  { icon: Cloud, title: 'Cloud-native practice', text: 'Hands-on work with containerized applications, Kubernetes jobs, and cloud tooling.' },
  { icon: Database, title: 'Data confidence', text: 'I use SQL and validation techniques to help ensure data is accurate and dependable.' },
  { icon: ShieldCheck, title: 'Quality first', text: 'Testing, troubleshooting, and careful validation are part of how I approach delivery.' },
]
export default function About() {
  return <div className="page-shell container">
    <PageIntro eyebrow="ABOUT ME" title="Curious by nature." highlight="Engineer by practice." description="A little context about my journey, the way I work, and the tools I use to make technology more dependable." />
    <section className="about-feature">
      <div className="about-visual"><img src="/images/about-work.svg" alt="Illustration of a developer workspace with code and cloud tools" /><div className="about-badge"><span>✦</span><div><b>Always learning</b><small>Build · Learn · Improve</small></div></div></div>
      <div className="about-copy"><div className="eyebrow"><span className="eyebrow-line"/> MY STORY</div><h2>Practical engineering.<br/><span className="gradient-text">Continuous learning.</span></h2>
        <p>I’m Manohar D, an Automation Engineer at Tata Consultancy Services in Bengaluru. My work sits at the intersection of Python automation, cloud-native application workflows, and data quality.</p>
        <p>In my current role, I help automate jobs running in Kubernetes pods and support application workflows. Before that, I worked on on-premises-to-Snowflake data migration, using SQL, Informatica IICS, Databricks, and Python to validate data and improve confidence in results.</p>
        <p>I enjoy learning technologies by applying them to real problems, and I’m especially interested in automation that makes systems easier to operate and maintain.</p>
        <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16}/></a>
      </div>
    </section>
    <section className="section-block"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> HOW I APPROACH WORK</div><h2>Principles that <span className="gradient-text">guide me.</span></h2></div></div>
      <div className="focus-grid">{strengths.map(({icon: Icon, title, text}, i) => <article className="focus-card" key={title}><div className={`focus-icon ${['purple','blue','cyan','pink'][i]}`}><Icon size={22}/></div><h3>{title}</h3><p>{text}</p><span className="card-index">0{i+1}</span></article>)}</div>
    </section>
    <section className="section-block section-soft"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> CAPABILITIES</div><h2>Technical <span className="gradient-text">toolkit.</span></h2></div></div>
      <div className="skills-grid">{skills.map((group, i) => <article className="skill-card" key={group.title}><div className="skill-card-top"><span className={`focus-icon ${['purple','blue','cyan','pink'][i]}`}>{i===0?<Braces size={20}/>:i===1?<Cloud size={20}/>:i===2?<Database size={20}/>:<Gauge size={20}/>}</span><h3>{group.title}</h3></div><div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}</div>
    </section>
  </div>
}
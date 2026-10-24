import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { profile } from '../data'

export default function Contact() {
  return <div className="page-shell container contact-page">
    <PageIntro eyebrow="CONTACT" title="Let’s make something" highlight="meaningful." description="Have an opportunity, a technical question, or an idea to collaborate on? I’d be glad to hear from you." />
    <div className="contact-layout">
      <div className="contact-main"><div className="contact-decoration"><div className="contact-decoration-inner"><Send size={32}/></div><div className="contact-spark spark-one">✦</div><div className="contact-spark spark-two">✧</div></div><div className="eyebrow"><span className="eyebrow-line"/> OPEN TO CONNECTIONS</div><h2>Good things start<br/>with a <span className="gradient-text">conversation.</span></h2><p>Whether it’s automation, cloud-native systems, data quality, or just sharing ideas about technology — let’s connect.</p><a className="button button-primary" href={`mailto:${profile.email}`}>Send me an email <ArrowUpRight size={17}/></a></div>
      <div className="contact-details">
        <a className="contact-detail-card" href={`mailto:${profile.email}`}><span className="contact-detail-icon purple"><Mail size={21}/></span><span><small>EMAIL ME</small><b>{profile.email}</b><em>Best for professional enquiries</em></span><ArrowUpRight size={17}/></a>
        <a className="contact-detail-card" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-detail-icon blue"><Linkedin size={21}/></span><span><small>LINKEDIN</small><b>Connect professionally</b><em>Let’s grow our network</em></span><ArrowUpRight size={17}/></a>
        <a className="contact-detail-card" href={profile.github} target="_blank" rel="noreferrer"><span className="contact-detail-icon cyan"><Github size={21}/></span><span><small>GITHUB</small><b>Explore my repositories</b><em>Code, projects, and experiments</em></span><ArrowUpRight size={17}/></a>
        <div className="contact-detail-card static"><span className="contact-detail-icon pink"><MapPin size={21}/></span><span><small>LOCATION</small><b>{profile.location}</b><em>India</em></span></div>
      </div>
    </div>
  </div>
}
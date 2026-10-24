export default function PageIntro({ eyebrow, title, highlight, description }) {
  return <div className="page-intro">
    <div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div>
    <h1>{title} {highlight && <span className="gradient-text">{highlight}</span>}</h1>
    {description && <p>{description}</p>}
  </div>
}
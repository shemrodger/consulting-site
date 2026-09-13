import { contact, meta } from './content/sharedContent';
import { work } from './content/siteContent';
import demo from './assets/screenshots/CoachToolScreenshot.mp4';
import './personal.css';

const focus = [
  ['Performance', 'Find the constraints. Improve flow, capacity and the decisions that shape the work.'],
  ['Transformation', 'Turn strategy into practical changes in how the business operates, with people who can carry them forward.'],
  ['Technology', 'Build and use software, automation, data and AI where they make the work better.'],
];
const thinking = [
  ['Follow the work.', 'Talk to the people doing it. Find where things wait, where decisions get stuck and where effort fails to turn into results.'],
  ['Change what matters.', 'Focus on the constraint. That might mean a clearer decision, a different process, a better tool or a change in responsibilities.'],
  ['Stay with the change.', 'Put it into practice, check the results and adjust. The work is done when the new way works for the people using it.'],
];

export default function App() {
  return <div className="personal-site">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="personal-nav"><a className="wordmark" href="#">{meta.name}<span>Performance & transformation</span></a><nav aria-label="Main navigation"><a href="#focus">Focus</a><a href="#work">Work</a><a href="#experience">Experience</a><a href={contact.substack} target="_blank" rel="noreferrer">Writing ↗</a><a href="#contact">Get in touch ↗</a></nav></header>
    <main id="main">
      <section className="personal-hero" aria-labelledby="hero-title">
        <div className="hero-heading tile"><p className="eyebrow">Shem Rodger / New Zealand</p><h1 id="hero-title">I improve how organisations perform.</h1><p className="hero-intro">I work across transformation, operations and technology to find constraints, improve flow and build better ways of working.</p><a className="text-link" href="#work">Explore my work ↗</a></div>
        <div className="system-art tile" role="img" aria-label="Lines converge through a narrow constraint, then open into a clear path"><div className="art-lines">{Array.from({length:9},(_,i)=><i key={i}/>)}</div><span className="art-caption">Find the constraint.<br/>Change the system.</span><span className="art-index">01 / Perspective</span></div>
        <a className="hero-note tile" href="#experience"><span className="eyebrow">A different route here</span><p>From elite sport<br/>to organisational<br/>performance.</p><span className="text-link">My experience ↗</span></a>
        <a className="hero-project tile" href="#built"><span className="eyebrow">In practice / Delivery Coach</span><p>Turning coaching insight<br/>into a tool people can use.</p><span aria-hidden="true">↗</span></a>
      </section>
      <section id="focus" className="personal-section"><div className="section-heading"><p className="eyebrow">01 / What I focus on</p><h2>Performance is the outcome.</h2></div><div className="focus-grid">{focus.map(([title,body],i)=><article className="focus-card tile" key={title}><span className="eyebrow">0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section id="thinking" className="personal-section thinking-section tile"><div><p className="eyebrow">02 / How I think</p><h2>Start where<br/>the work gets stuck.</h2><p className="thinking-intro">Better performance starts with understanding what is getting in the way.</p></div><div>{thinking.map(([title,body],i)=><article className="thinking-row" key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
      <section id="work" className="personal-section"><div className="section-heading"><p className="eyebrow">03 / What I’ve changed</p><h2>Changes that show up in the work.</h2></div><div className="outcome-grid">{work.projects.filter(p=>p.id!=='p2').map((project,i)=><article className="outcome-card tile" key={project.id}><p className="eyebrow">{['Infrastructure delivery','Workforce planning','Business systems'][i]}</p><h3>{project.name}</h3><p>{project.problem}</p><div className="result"><span className="eyebrow">What changed</span><p>{project.outcome}</p></div></article>)}</div></section>
      <section id="built" className="personal-section built-section tile"><div className="built-copy"><p className="eyebrow">04 / What I’ve built</p><h2>Delivery Coach.</h2><p className="built-lede">Making speaking feedback more accessible.</p><p>One-to-one coaching takes time and access to an expert. Delivery Coach uses speech transcription and AI to turn a recording into practical feedback on how someone speaks.</p><p>A working example of how I bring performance thinking into product and software.</p><span className="project-caption">Product development / Speech analysis / AI</span></div><figure><video src={demo} controls muted playsInline preload="metadata" aria-label="Delivery Coach product demonstration"/><figcaption>The tool in use. Play the demo to see the feedback.</figcaption></figure></section>
      <section id="experience" className="personal-section experience-section"><div><p className="eyebrow">05 / Experience</p><h2>Performance,<br/>from the inside.</h2><a className="text-link" href={contact.linkedin} target="_blank" rel="noreferrer">Full experience on LinkedIn ↗</a></div><div className="experience-copy"><p className="experience-lede">My background spans elite cycling coaching, operational delivery and building software.</p><p>As an Olympic medal-winning cycling coach, I worked with the detail behind performance: preparation, feedback, decisions and the conditions people need to do their best work.</p><p>In operational environments, that attention turns to how work moves through a business. I connect the people, processes and technology involved, and stay close enough to help make the changes happen.</p><div className="experience-tags"><span>Elite sport</span><span>Operational improvement</span><span>Product & technology</span></div></div></section>
      <section id="contact" className="personal-contact tile"><p className="eyebrow">A project. A role. A conversation.</p><h2>What are you<br/>working through?</h2><div className="contact-bottom"><p>I’m interested in work where I can help an organisation perform better — through a focused project or as part of the team.</p><a href={`mailto:${contact.email}`}>{contact.email} ↗</a></div></section>
    </main>
    <footer className="personal-footer"><span>© {new Date().getFullYear()} {meta.name}</span><span>Based in New Zealand · Working across borders</span><span><a href={contact.substack} target="_blank" rel="noreferrer">Substack ↗</a> <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></span></footer>
  </div>;
}

import { useState } from 'react'

const Spark = () => <svg className="spark" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 1 24 16 39 20 24 24 20 39 16 24 1 20 16 16Z" /></svg>

function Buddy({ small = false }: { small?: boolean }) {
  return <svg className={small ? 'buddy small' : 'buddy'} viewBox="0 0 250 250" role="img" aria-label="A friendly abstract desktop companion">
    <path d="M46 164c-25-47 5-117 59-128 34-7 58 12 69 30 13-17 48-24 65 12 20 44-8 120-53 137-45 16-113-5-140-51Z" fill="#d8ff38" stroke="#17283f" strokeWidth="5" />
    <path d="M78 91c18-18 41-26 67-23M68 123c10 12 26 16 41 10M160 102c10-10 24-13 37-7" fill="none" stroke="#17283f" strokeWidth="6" strokeLinecap="round" />
    <circle cx="111" cy="108" r="5" fill="#17283f" /><circle cx="170" cy="108" r="5" fill="#17283f" />
    <path d="M119 151c15 12 33 11 46-2" fill="none" stroke="#17283f" strokeWidth="6" strokeLinecap="round" />
    <path d="M103 38 94 12m36 26 8-28m22 38 24-17" stroke="#f25d43" strokeWidth="7" strokeLinecap="round" />
  </svg>
}

const features = [
  ['Tell me what I’m looking at', 'Nudge notices the thing on your screen and gives you the next move in plain English.', '⌘  Space'],
  ['Mark it up with me', 'Circle, point, and explain right where your attention already is—without sending another screenshot.', 'draw mode'],
  ['Handle the tiny chores', 'Give Nudge a bounded task and watch it work through the boring bits with you in the loop.', 'task mode'],
]

const plans = [
  { name: 'sprout', note: 'for getting a feel for it', price: '$0', list: ['30 asks each month', 'screen guidance', 'small tasks'] },
  { name: 'daily', note: 'for a full workday', price: '$18', list: ['unlimited asks', 'unlimited markup', '150 tasks each month'], featured: true },
  { name: 'studio', note: 'for serious making', price: '$72', list: ['everything in daily', '1,000 tasks each month', 'priority experiments'] },
]

const faqs = [
  ['What is Nudge?', 'Nudge is a desktop companion concept. It sits nearby when you want a second set of eyes, then gets out of the way.'],
  ['Does it see my screen all day?', 'No. The design assumes you choose when to share what is on screen. Nothing is quietly recorded in the background.'],
  ['Do I need to be technical?', 'No. It is built around ordinary words and visible actions, not settings screens or command lines.'],
  ['Can I cancel whenever?', 'Yes. The example plans are month to month and meant to be easy to leave.'],
]

export default function App() {
  const [yearly, setYearly] = useState(false)
  return <div className="page">
    <header className="nav"><a className="logo" href="#top"><span className="logo-dot" />nudge</a><nav><a href="#how">how it feels</a><a href="#plans">plans</a><a href="#questions">questions</a></nav><a className="nav-cta" href="#plans">try the idea <span>↗</span></a></header>
    <main id="top">
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">a little help, right where you work</p><h1>Meet the<br /><em>second brain</em><br />on your desk.</h1><p className="intro">Nudge is a tiny AI companion for the moments when you’re stuck, curious, or just tired of doing the same thing twice.</p><div className="hero-actions"><a className="button" href="#how">take a peek <span>↓</span></a><span className="availability">built for unhurried humans</span></div></div>
        <div className="hero-scene"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><Spark /><div className="window"><div className="window-bar"><i /><i /><i /><span>today’s desktop</span></div><div className="desktop"><div className="sticky">take a breath.<br />then ask.</div><div className="bubble bubble-one">what’s this button for?</div><div className="bubble bubble-two">this one saves it.<br />you’re safe.</div><Buddy /><div className="dock"><b>⌘</b><b>✦</b><b>✉</b><b>◌</b></div></div></div><span className="scribble">“wait, that’s<br />actually helpful”</span></div>
      </section>
      <section className="marquee"><div>LESS FRICTION <span>✦</span> MORE MAKING <span>✦</span> LESS FRICTION <span>✦</span> MORE MAKING <span>✦</span></div></section>
      <section className="intro-section" id="how"><p className="eyebrow">the useful kind of magic</p><h2>Not another chat box.<br /><em>A presence.</em></h2><p>When something on your screen needs a little context, Nudge is already close by. Tap in, talk it through, move on.</p></section>
      <section className="feature-list">{features.map(([title, text, tag], index) => <article className="feature" key={title}><div className="feature-number">0{index + 1}</div><div><h3>{title}</h3><p>{text}</p><a href="#plans">see it in action <span>↗</span></a></div><div className={'feature-visual visual-' + index}>{index === 0 && <><span className="floating-tag">{tag}</span><div className="screen-lines"><i /><i /><i /></div><Buddy small /></>}{index === 1 && <><svg viewBox="0 0 200 180" aria-hidden="true"><path d="M28 138c16-72 47-88 81-84 28 4 37 34 66 0" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/><circle cx="50" cy="115" r="22" fill="#f25d43"/><path d="M55 115h84" stroke="currentColor" strokeWidth="4"/></svg><span className="floating-tag">{tag}</span></>}{index === 2 && <><div className="checklist"><span>✓ rename files</span><span>✓ sort drafts</span><span>• send when ready</span></div><span className="floating-tag">{tag}</span></>}</div></article>)}</section>
      <section className="note"><div><p className="eyebrow">A note from the desk</p><h2>Good tools should make you feel <em>more like yourself.</em></h2></div><div className="note-copy"><p>We have more software than ever, yet many days still feel like a hundred tiny paper cuts. Nudge is our attempt to make computers feel a little more generous.</p><p>It doesn’t need to be the star of the show. It just needs to be there at the right moment.</p><span>— the Nudge crew</span></div><div className="note-doodle"><Buddy /><Spark /></div></section>
      <section className="love"><p className="eyebrow">desk notes</p><h2>People like having<br />a <em>gentle nudge.</em></h2><div className="quotes"><blockquote>“It feels less like software and more like my calmest coworker.”<footer>— Sam, product designer</footer></blockquote><blockquote>“I asked one small question, and suddenly I was back in flow.”<footer>— Rowan, independent maker</footer></blockquote><blockquote>“The nicest thing is that it never makes me feel behind.”<footer>— Jules, learning illustrator</footer></blockquote></div></section>
      <section className="plans" id="plans"><p className="eyebrow">pick your pace</p><h2>Small plans for<br /><em>big afternoons.</em></h2><div className="toggle" role="group" aria-label="Billing interval"><button className={!yearly ? 'active' : ''} onClick={() => setYearly(false)}>monthly</button><button className={yearly ? 'active' : ''} onClick={() => setYearly(true)}>yearly <small>save 20%</small></button></div><div className="plan-grid">{plans.map(plan => <article className={'plan ' + (plan.featured ? 'featured' : '')} key={plan.name}>{plan.featured && <span className="popular">most picked</span>}<h3>{plan.name}</h3><p>{plan.note}</p><strong>{plan.name === 'sprout' ? '$0' : yearly ? plan.name === 'daily' ? '$14' : '$58' : plan.price}<small>{plan.name !== 'sprout' && ' / month'}</small></strong><a href="mailto:hello@example.com" className="plan-button">start here <span>↗</span></a><ul>{plan.list.map(item => <li key={item}>✦ {item}</li>)}</ul></article>)}</div></section>
      <section className="faq" id="questions"><p className="eyebrow">ask away</p><h2>Things people<br /><em>wonder about.</em></h2><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
    </main>
    <footer><a className="logo" href="#top"><span className="logo-dot" />nudge</a><p>Made with fewer tabs open.</p><div><a href="#how">how it feels</a><a href="#plans">plans</a><a href="#questions">questions</a></div><small>© 2026 Nudge Co. An original demo concept.</small></footer>
  </div>
}

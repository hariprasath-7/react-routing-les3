import TiltCard from '../components/TiltCard.jsx'

const About = () => {
  return (
    <section className="page">
      <span className="eyebrow">About</span>
      <h1>Built to be simple and clear.</h1>
      <p className="lead">
        This project demonstrates a clean multi-page layout with a shared
        navbar and footer, wrapped in a warm, distraction-free interface.
      </p>
      <div className="card-grid">
        <TiltCard>
          <div className="card">
            <h3>The stack</h3>
            <p>React 19, React Router, and Vite — a modern, lightweight setup.</p>
          </div>
        </TiltCard>
        <TiltCard>
          <div className="card">
            <h3>The layout</h3>
            <p>A sticky navbar, routed content area, and a grounding footer.</p>
          </div>
        </TiltCard>
      </div>
    </section>
  )
}

export default About

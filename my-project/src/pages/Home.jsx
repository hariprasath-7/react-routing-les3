import TiltCard from '../components/TiltCard.jsx'

const Home = () => {
  return (
    <section className="page">
      <span className="eyebrow">Welcome</span>
      <h1>A calm, focused starting point.</h1>
      <p className="lead">
        A simple three-page React application, styled with a warm, minimal
        aesthetic. Use the navigation above to explore.
      </p>
      <div className="card-grid">
        <TiltCard>
          <div className="card">
            <h3>Fast</h3>
            <p>Powered by Vite for instant reloads and quick builds.</p>
          </div>
        </TiltCard>
        <TiltCard>
          <div className="card">
            <h3>Routed</h3>
            <p>Client-side navigation with React Router — no full reloads.</p>
          </div>
        </TiltCard>
        <TiltCard>
          <div className="card">
            <h3>Refined</h3>
            <p>Thoughtful type, spacing, and color for a polished feel.</p>
          </div>
        </TiltCard>
      </div>
    </section>
  )
}

export default Home

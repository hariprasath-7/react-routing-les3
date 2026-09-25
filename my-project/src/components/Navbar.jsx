import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar-brand">
        <span className="dot" />
        My App
      </span>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar

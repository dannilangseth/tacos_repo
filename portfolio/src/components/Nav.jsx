import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/drinkbubblr', label: 'Drinkbubblr' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo">Portfolio</Link>

        <ul className="nav-links">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </>
  )
}

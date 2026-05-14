import { Link } from 'react-router-dom'
import { heroPhoto } from '../data/photos'

export default function Home() {
  return (
    <div className="home page">
      <div className="home-hero">
        <div className="home-hero-img">
          {heroPhoto.src
            ? <img src={heroPhoto.src} alt={heroPhoto.alt} />
            : <div className="photo-placeholder" style={{ height: '100%' }} />
          }
        </div>
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <h1>Content producer specializing in hospitality, travel, and lifestyle photography.</h1>
          <Link to="/portfolio" className="btn">View Work</Link>
        </div>
      </div>
    </div>
  )
}

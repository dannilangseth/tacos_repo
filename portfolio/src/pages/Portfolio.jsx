import { Link } from 'react-router-dom'
import { categoryCoverPhotos } from '../data/photos'

const categories = [
  {
    label: 'Hospitality / Travel',
    to: '/portfolio/hospitality',
    cover: categoryCoverPhotos.hospitality,
  },
  {
    label: 'Food & Beverage',
    to: '/portfolio/food-beverage',
    cover: categoryCoverPhotos.foodBeverage,
  },
  {
    label: 'Lifestyle & Product',
    to: '/portfolio/lifestyle',
    cover: categoryCoverPhotos.lifestyle,
  },
]

export default function Portfolio() {
  return (
    <div className="page portfolio-hub">
      <h1>Portfolio</h1>
      <div className="portfolio-categories">
        {categories.map(({ label, to, cover }) => (
          <Link to={to} key={to} className="portfolio-category-card">
            {cover
              ? <img src={cover} alt={label} />
              : <div className="photo-placeholder" style={{ height: '100%' }} />
            }
            <div className="portfolio-category-overlay">
              <span className="portfolio-category-label">{label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

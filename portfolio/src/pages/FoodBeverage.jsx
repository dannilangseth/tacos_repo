import { Link } from 'react-router-dom'
import ImageGrid from '../components/ImageGrid'
import { foodBeveragePhotos } from '../data/photos'

const placeholders = Array.from({ length: 8 }, (_, i) => ({ ratio: i % 4 === 0 ? 'tall' : 'square' }))

export default function FoodBeverage() {
  const photos = foodBeveragePhotos.length > 0 ? foodBeveragePhotos : placeholders

  return (
    <div className="image-grid-page">
      <div className="image-grid-header">
        <Link to="/portfolio" className="back-link">Portfolio</Link>
        <h1>Food & Beverage</h1>
      </div>
      <ImageGrid photos={photos} cols={3} />
    </div>
  )
}

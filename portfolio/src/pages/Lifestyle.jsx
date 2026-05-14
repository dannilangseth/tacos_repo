import { Link } from 'react-router-dom'
import ImageGrid from '../components/ImageGrid'
import { lifestylePhotos } from '../data/photos'

const placeholders = Array.from({ length: 9 }, () => ({ ratio: 'square' }))

export default function Lifestyle() {
  const photos = lifestylePhotos.length > 0 ? lifestylePhotos : placeholders

  return (
    <div className="image-grid-page">
      <div className="image-grid-header">
        <Link to="/portfolio" className="back-link">Portfolio</Link>
        <h1>Lifestyle & Product</h1>
      </div>
      <ImageGrid photos={photos} cols={3} />
    </div>
  )
}

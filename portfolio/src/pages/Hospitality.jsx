import { Link } from 'react-router-dom'
import ImageGrid from '../components/ImageGrid'
import { hospitalityPhotos } from '../data/photos'

const placeholders = Array.from({ length: 9 }, (_, i) => ({ ratio: i % 3 === 0 ? 'landscape' : 'square' }))

export default function Hospitality() {
  const photos = hospitalityPhotos.length > 0 ? hospitalityPhotos : placeholders

  return (
    <div className="image-grid-page">
      <div className="image-grid-header">
        <Link to="/portfolio" className="back-link">Portfolio</Link>
        <h1>Hospitality / Travel</h1>
      </div>
      <ImageGrid photos={photos} cols={3} />
    </div>
  )
}

import ImageGrid from '../components/ImageGrid'
import { drinkbubblrPhotos } from '../data/photos'

const placeholders = Array.from({ length: 6 }, (_, i) => ({ ratio: i % 3 === 1 ? 'wide' : 'square' }))

export default function Drinkbubblr() {
  const photos = drinkbubblrPhotos.length > 0 ? drinkbubblrPhotos : placeholders

  return (
    <div className="case-study-page">
      <div className="case-study-header">
        <h1>Drinkbubblr</h1>
        <p>
          Drinkbubblr is a brand built around the ritual of elevated hydration.
          This case study covers full-spectrum content creation — from product
          photography and lifestyle shoots to social-ready assets — designed to
          communicate the brand's clean, premium identity.
        </p>
      </div>
      <ImageGrid photos={photos} cols={3} />
    </div>
  )
}

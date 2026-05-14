import LazyImage from './LazyImage'

// ratio: 'tall' | 'wide' | 'square' | 'landscape' (default square)
export default function ImageGrid({ photos, cols = 3 }) {
  return (
    <div className={`image-grid cols-${cols}`}>
      {photos.map((photo, i) => (
        <div
          key={photo.src || i}
          className={`image-grid-item ${photo.ratio || 'square'}`}
        >
          {photo.src
            ? <LazyImage src={photo.src} alt={photo.alt || ''} />
            : <div className="photo-placeholder">Photo coming soon</div>
          }
        </div>
      ))}
    </div>
  )
}

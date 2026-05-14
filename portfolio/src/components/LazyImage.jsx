import { useEffect, useRef, useState } from 'react'

export default function LazyImage({ src, alt = '' }) {
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="lazy-image-wrap">
      {visible && (
        <img
          src={src}
          alt={alt}
          className={loaded ? 'loaded' : 'loading'}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  )
}

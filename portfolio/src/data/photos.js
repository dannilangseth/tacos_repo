// ─────────────────────────────────────────────────────
// PHOTO DATA
// Drop images into public/images/<category>/
// then update these arrays. src paths are relative to /public.
//
// ratio options: 'square' | 'tall' | 'wide' | 'landscape'
// Group photos by visual cohesion — similar mood/palette together.
// ─────────────────────────────────────────────────────

export const heroPhoto = {
  // Replace with your chosen hero image
  src: '/images/hero.jpg',
  alt: 'Hero',
}

// ── HOSPITALITY / TRAVEL ──────────────────────────────
// Suggested groupings after photo analysis:
//   Group A: Hotel interiors / rooms (warm tones)
//   Group B: Exteriors / architecture
//   Group C: Landscapes / travel contexts
export const hospitalityPhotos = [
  // { src: '/images/hospitality/img01.jpg', ratio: 'landscape' },
  // { src: '/images/hospitality/img02.jpg', ratio: 'square' },
  // { src: '/images/hospitality/img03.jpg', ratio: 'tall' },
]

// ── FOOD & BEVERAGE ───────────────────────────────────
// Suggested groupings after photo analysis:
//   Group A: Hero food shots (moody/dark background)
//   Group B: Drink / beverage product
//   Group C: Dining/table context
export const foodBeveragePhotos = [
  // { src: '/images/food-beverage/img01.jpg', ratio: 'square' },
  // { src: '/images/food-beverage/img02.jpg', ratio: 'tall' },
]

// ── LIFESTYLE & PRODUCT ───────────────────────────────
// Suggested groupings after photo analysis:
//   Group A: Retail / product on surface
//   Group B: Lifestyle / people with product
export const lifestylePhotos = [
  // { src: '/images/lifestyle/img01.jpg', ratio: 'square' },
  // { src: '/images/lifestyle/img02.jpg', ratio: 'wide' },
]

// ── DRINKBUBBLR ───────────────────────────────────────
// Case study — brand content for Drinkbubblr
export const drinkbubblrPhotos = [
  // { src: '/images/drinkbubblr/img01.jpg', ratio: 'square' },
  // { src: '/images/drinkbubblr/img02.jpg', ratio: 'wide' },
]

// ── CATEGORY COVER IMAGES ─────────────────────────────
// Used as preview thumbnails on the /portfolio hub page
export const categoryCoverPhotos = {
  hospitality: '/images/hospitality/img01.jpg',
  foodBeverage: '/images/food-beverage/img01.jpg',
  lifestyle: '/images/lifestyle/img01.jpg',
}

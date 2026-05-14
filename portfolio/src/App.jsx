import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Hospitality from './pages/Hospitality'
import FoodBeverage from './pages/FoodBeverage'
import Lifestyle from './pages/Lifestyle'
import Drinkbubblr from './pages/Drinkbubblr'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/hospitality" element={<Hospitality />} />
          <Route path="/portfolio/food-beverage" element={<FoodBeverage />} />
          <Route path="/portfolio/lifestyle" element={<Lifestyle />} />
          <Route path="/drinkbubblr" element={<Drinkbubblr />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

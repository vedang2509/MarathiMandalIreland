import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import VarshikAnk from './pages/VarshikAnk'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/varshik-ank" element={<VarshikAnk />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
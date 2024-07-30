import './index.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './pages/home'
import { Products } from './pages/products'
import { ContactUs } from './pages/contact-us'
import { Layout } from './layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
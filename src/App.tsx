import { Routes, Route } from 'react-router-dom'
import './_styles.scss'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Homepage from './pages/Homepage'
import Portfolio from './pages/Portfolio'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

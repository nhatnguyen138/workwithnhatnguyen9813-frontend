import { Routes, Route } from 'react-router-dom'
import './_styles.scss'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Homepage from './pages/Homepage'
import Portfolio from './pages/Portfolio'
import Articles from './pages/Articles'
import AboutMe from './pages/AboutMe'

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

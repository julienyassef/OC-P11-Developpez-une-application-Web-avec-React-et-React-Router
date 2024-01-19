import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

// Page
import Home from './Page/Home';
import Accommodation from './Page/Accommodation';
import About from './Page/About';
import NotFound from './page/NotFound';

// NavBar et footer
import NavBar from './components/NavBar';

function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

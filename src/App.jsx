import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

// Page
import Home from './Page/Home';
import Accommodation from './Page/Accommodation';
import About from './Page/About';
import Page404 from './Page/Page404';

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

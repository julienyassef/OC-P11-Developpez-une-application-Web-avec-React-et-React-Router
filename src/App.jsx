import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

// Page
import Home from './Page/Home';
import Accommodation from './Page/Accommodation';
import About from './Page/About';
import NotFound from './page/NotFound';

// NavBar et footer
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/footer';

function App() {

  return (
    <>
    <Router>
      <div className='layout'>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accommodation/:id" element={<Accommodation />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App

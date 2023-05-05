import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Studio from './pages/Studio/Studio';
import IP from './pages/Studio/IP/IP';
import Inquire from './pages/Inquire/Inquire';
import Concierge from './pages/Concierge/Concierge';



function App() {
  return (
    <>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/ip" element={<IP />} />
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/concierge" element={<Concierge />} />
        </Routes>
        <Footer />
      </main>
   
    </>
  
  );
}

export default App;

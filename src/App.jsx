import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Studio from './pages/Studio/Studio';
import Type from './pages/Studio/Type/Type';
import R1S from './pages/Studio/R1S/R1S';
import CR from './pages/Studio/CR/CR';
import HF from './pages/Studio/HF/HF';
import HS from './pages/Studio/HS/HS';
import IP from './pages/Studio/IP/IP';
import ID from './pages/Studio/ID/ID';
import AR from './pages/Studio/AR/AR';
import Inquire from './pages/Inquire/Inquire';
import Concierge from './pages/Concierge/Concierge';
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/type" element={<Type />} />
        <Route path="/r1s" element={<R1S />} />
        <Route path="/cr" element={<CR />} />
        <Route path="/hf" element={<HF />} />
        <Route path="/hasu" element={<HS />} />
        <Route path="/ip" element={<IP />} />
        <Route path="/id" element={<ID />} />
        <Route path="/aura" element={<AR />} />
        <Route path="/inquire" element={<Inquire />} />
        <Route path="/concierge" element={<Concierge />} />

      </Routes>
      <Footer />


    </>

  );
}

export default App;

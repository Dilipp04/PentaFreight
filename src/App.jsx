import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/layout/SmoothScroll';
import StickyLogo from './components/layout/StickyLogo';
import Home from './pages/Home';
import Industries from './pages/Industries';
import Pentakuhl from './pages/Pentakuhl';
import OfficeLocationsSection from './components/home/OfficeLocations';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
          <Navbar />
          <StickyLogo />

          <main className="grow flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/pentakuhl" element={<Pentakuhl />} />
            </Routes>
          </main>
          <OfficeLocationsSection />

          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;

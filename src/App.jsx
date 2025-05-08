import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeHeader from './components/Homeheader';
import MainHeader from './components/MainHeader';
import Footer from './components/footer';
import Home from './pages/index';
import PteMasterClass from './pages/PTE-MasterClass';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/language-king-website';

  return (
    <>
      {isHomePage ? <HomeHeader /> : <MainHeader />}
      
      <main className='relative h-full pb-4'>
        <div className='bg-noise-pattern absolute inset-0'></div>
        <Routes>
          <Route path="/language-king-website" element={<Home />} />
          <Route path="language-king-website/pte-masterclass" element={<PteMasterClass />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

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
      <Routes>
        <Route path="/language-king-website" element={<Home />} />
        <Route path="/pte-masterclass" element={<PteMasterClass />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

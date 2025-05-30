import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomeHeader from "./components/Homeheader";
import MainHeader from "./components/MainHeader";
import Footer from "./components/footer";
import Home from "./pages/index";
import PteMasterClass from "./pages/PTE-MasterClass";
import NAATICCL from "./pages/NAATI-CCL";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import FreeEBook from "./pages/Free-E-book";

function App() {
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" || location.pathname === "/language-king-website/";

  return (
    <>
      {isHomePage ? <HomeHeader /> : <MainHeader />}

      <main className="relative h-full">
        <div className="bg-noise-pattern absolute inset-0"></div>
        <Routes>
          <Route path="/language-king-website" element={<Home />} />
          <Route path="/pte-masterclass" element={<PteMasterClass />} />
          <Route path="/naaticcl" element={<NAATICCL />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-e-book" element={<FreeEBook />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

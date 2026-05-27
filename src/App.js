import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Hero from './components/Hero';

import Navbar from './components/Navbar';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import GlobalCorporate from './components/GlobalCorporate';
import IndianCorporate from './components/IndianCorporate';
import ScrollToTop from './components/ScrollTotop/ScrollToTop';


// LANDING PAGE
function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Hero />
    </div>
  );
}


// GLOBAL CORPORATE WEBSITE
function GlobalCorporatePage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <GlobalCorporate />

      <Services />
      <WhyChooseUs />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}


// INDIAN CORPORATE WEBSITE
function IndianCorporatePage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <IndianCorporate />

      <Services />
      <WhyChooseUs />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* Global Corporate */}
        <Route
          path="/global-corporate"
          element={<GlobalCorporatePage />}
        />

        {/* Indian Corporate */}
        <Route
          path="/indian-corporate"
          element={<IndianCorporatePage />}
        />

      </Routes>
    </BrowserRouter>
  );
}
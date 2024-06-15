import React from 'react';
import './styles/main.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhoAreWe from './components/WhoAreWe';
import Footer from './components/Footer';
import FleetEfficiency from './components/FleetEfficiency';

const App = () => (
  <div>
    <Header />
    <HeroSection />
    <Services/>
    <HowItWorks />
    <WhoAreWe />
    <FleetEfficiency/>
    <AboutUs />
    <Features />
    
    
    <ContactUs />
    <Footer />
  </div>
);

export default App;

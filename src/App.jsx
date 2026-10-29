import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Multi-Page Routes
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GeneralFreightPage from './pages/GeneralFreightPage';
import HouseholdGoodsPage from './pages/HouseholdGoodsPage';
import IndustriesPage from './pages/IndustriesPage';
import RequestQuotePage from './pages/RequestQuotePage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAFAF8] text-[#151719] flex flex-col selection:bg-[#D99A38]/20 selection:text-[#151719]">
        {/* Persistent Premium Navbar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/general-freight" element={<GeneralFreightPage />} />
            <Route path="/services/household-goods" element={<HouseholdGoodsPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/request-a-quote" element={<RequestQuotePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Persistent Premium Footer */}
        <Footer />
      </div>
    </Router>
  );
}

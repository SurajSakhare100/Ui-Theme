import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Terms from "./pages/Terms";
import CancellationRefund from "./pages/CancellationRefund";
import Shipping from "./pages/Shipping";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Footer from "./components/Navigation/Footer";
import Navbar from "./components/Navigation/Navbar";
import TemplatesPage from "./pages/Templates";
import TemplatePreview from "./pages/TemplatePreview";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/templates/data" element={<TemplatePreview />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cancellation-refund" element={<CancellationRefund />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer/>

    </Router>
  );
};

export default App;

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Ourgallery from "./Pages/Ourgallery";
import Bloglists from "./Pages/Bloglists";
import Blogsingle from "./Pages/Blogsingle";
import Pricing from "./Pages/Pricing";
import Booknow from "./Pages/Booknow";
import Comingsoon from "./Pages/Comingsoon";
import Faq from "./Pages/Faq";
import Error from "./Pages/Error";
import Sponsers from "./Pages/Sponsers";
import Eventlists from "./Pages/Eventlists";
import Eventdetail from "./Pages/Eventdetail";
import Searchresult from "./Pages/Searchresult";
import Testimonials from "./Pages/Testimonials";
import Speak from "./Pages/Speak";
import Nominate from "./Pages/Nominate";
import Pitch from "./Pages/Pitch";
import Partners from "./Pages/Partners";
import ExhibitSponsor from "./Pages/ExhibitSponsor";
import WhyExhibit from "./Pages/WhyExhibit";
import Awards from "./Pages/Awards";
import PastEdition from "./Pages/PastEdition";
import TermsConditions from "./Pages/TermsConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Cart from "./Pages/Cart";
import Visit from "./Pages/Visit";
import WhoAttends from "./Pages/WhoAttends";
import Speakerdetail from "./Pages/Speakerdetail";
import Speakers from "./Pages/Speakerlists";
import Agenda from "./Pages/Agenda";
import EventPartners from "./Pages/EventPartner";

import KeyInformation from "./Pages/KeyInformation";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/Comingsoon";

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* ✅ KEY INFORMATION ROUTES */}
        {/* ✅ KEY INFORMATION ROUTES (Now Standalone) */}
        <Route path="/key-information" element={<KeyInformation />} />
        <Route path="/key-information/about" element={<About />} />
        <Route path="/key-information/speakers" element={<Speakers />} />
        <Route path="/key-information/agenda" element={<Agenda />} />

        {/* बाकी normal pages */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Ourgallery" element={<Ourgallery />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Speak" element={<Speak />} />
        <Route path="/Nominate" element={<Nominate />} />
        <Route path="/Pitch" element={<Pitch />} />
        <Route path="/WhoAttends" element={<WhoAttends />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/WhyExhibit" element={<WhyExhibit />} />
        <Route path="/Exhibit-Sponsor" element={<ExhibitSponsor />} />
        <Route path="/Booknow" element={<Booknow />} />
        <Route path="/Comingsoon" element={<Comingsoon />} />
        <Route path="/PastEdition" element={<PastEdition />} />
        <Route path="/Speakerdetail" element={<Speakerdetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Eventlists" element={<Eventlists />} />
        <Route path="/Eventdetail" element={<Eventdetail />} />
        <Route path="/Searchresult" element={<Searchresult />} />
        <Route path="/Sponsers" element={<Sponsers />} />
        <Route path="/Awards" element={<Awards />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Bloglists" element={<Bloglists />} />
        <Route path="/Blogsingle" element={<Blogsingle />} />
        <Route path="/Visit" element={<Visit />} />
        <Route path="/EventPartners" element={<EventPartners />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;

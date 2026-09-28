import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Amenities from "./components/Amenities";
import AppointmentCTA from "./components/AppointmentCTA";

import About from "./pages/About";
import Treatments from "./pages/Treatments";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <Testimonials />
      <Amenities />
      <AppointmentCTA />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
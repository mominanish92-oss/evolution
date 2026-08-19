import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Trainers from "./pages/Trainers";
import Certification from "./pages/Certification";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/trainers" element={<Trainers />} />

        <Route
          path="/certification"
          element={<Certification />}
        />

        <Route
          path="/membership"
          element={<Membership />}
        />

        <Route path="/contact" element={<Contact />} />

        {/* Unknown URL */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
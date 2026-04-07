import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import HireTalent from "./pages/HireTalent";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />

      {/* 🔥 ROUTES INSIDE LAYOUT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire-talent" element={<HireTalent />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

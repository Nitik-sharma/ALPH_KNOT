import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import HireTalent from "./pages/HireTalent";
import { Routes, Route } from "react-router-dom";
import BookCall from "./pages/BookCall";
import HowWeWork from "./pages/HowWeWork";
import Services from "./pages/Services";
import WhoWeHelp from "./pages/WhoWeHelp";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />

      {/* 🔥 ROUTES INSIDE LAYOUT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire-talent" element={<HireTalent />} />
        <Route path="/book-call" element={<BookCall />} />
        <Route path="/how-it-works" element={<HowWeWork />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/who-we-help"} element={<WhoWeHelp/> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

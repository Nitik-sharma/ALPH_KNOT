import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import HireTalent from "./pages/HireTalent";
import { Routes, Route } from "react-router-dom";
import BookCall from "./pages/BookCall";
import HowWeWork from "./pages/HowWeWork";
import Services from "./pages/Services";
import WhoWeHelp from "./pages/WhoWeHelp";
import Excecutive from "./services/Excecutive";
import Customer from "./services/Customer"
import CustomWorkFlow from "./services/CustomWorkFlow"
import DigitalGrowth from "./services/DigitalGrowth"
import Finance from "./services/Finance"
import HumanResources from "./services/HumanResources"
import Knowledge from "./services/Knowledge"
import TechDevelopment from "./services/TechDevelopment"
import Bank from './services/Bank'

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
        <Route path={"/who-we-help"} element={<WhoWeHelp />} />
        <Route path="/services/executive-support" element={<Excecutive />} />
        <Route path="/services/customer-operations" element={<Customer />} />

        <Route path="/services/back-office" element={<Bank />} />
        <Route path="/services/finance" element={<Finance />} />
        <Route path="/services/digital-growth" element={<DigitalGrowth />} />
        <Route path="/services/hr" element={<HumanResources />} />
        <Route path="/services/tech" element={<TechDevelopment />} />
        <Route path="/services/kpo" element={<Knowledge />} />
        <Route path="/services/iss" element={<Knowledge />} />
        <Route path="/services/custom" element={ <CustomWorkFlow/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

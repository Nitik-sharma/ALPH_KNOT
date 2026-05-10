
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HireTalent from "./pages/HireTalent";
import BookCall from "./pages/BookCall";
import HowWeWork from "./pages/HowWeWork";
import Services from "./sections/Services";
import WhoWeHelp from "./pages/WhoWeHelp";
import AlphKnotAbout from "./pages/About";
import AlphKnotContact from "./pages/Alphknotcontact";
import Excecutive from "./services/Excecutive";
import Customer from "./services/Customer";
import HireTalentForm from "./pages/Hiretalentform";
import ApplyForm from "./pages/Applyform";
import Philosophy from "./pages/Philosophy";
import Careers from "./pages/Careers";
import Bank from "./services/Bank";
import Finance from "./services/Finance";
import DigitalGrowth from "./services/DigitalGrowth";
import HumanResources from "./services/HumanResources";
import TechDevelopment from "./services/TechDevelopment";
import Knowledge from "./services/Knowledge";
import IndustrySolutions from "./services/IndustrySolutions";
import CustomWorkFlow from "./services/CustomWorkFlow";
import TeamPods from "./services/TeamPods";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hire-talent" element={<HireTalent />} />
      <Route path="/book-call" element={<BookCall />} />
      <Route path="/how-it-works" element={<HowWeWork />} />
      <Route path="/services" element={<Services />} />
      <Route path="/who-we-help" element={<WhoWeHelp/>} />
      <Route path="/about" element={<AlphKnotAbout />} />
      <Route path="/contact-us" element={<AlphKnotContact />} />
      <Route path="/services/executive-support" element={<Excecutive />} />
      <Route path="/services/customer-operations" element={<Customer />} />
      <Route path="/hire-bussiness" element={<HireTalentForm />} />
      <Route path="/apply-job" element={<ApplyForm />} />
      <Route path="/philosophy" element={<Philosophy />} />
      <Route path="/careers" element={<Careers />} />

      <Route path="/services/back-office" element={<Bank />} />
      <Route path="/services/finance" element={<Finance />} />
      <Route path="/services/digital-growth" element={<DigitalGrowth />} />
      <Route path="/services/hr" element={<HumanResources />} />
      <Route path="/services/tech" element={<TechDevelopment />} />
      <Route path="/services/kpo" element={<Knowledge />} />
      <Route
        path="/services/industry-solutions"
        element={<IndustrySolutions />}
      />
      <Route path="/services/custom" element={<CustomWorkFlow />} />
      <Route path="/services/team-pods" element={<TeamPods />} />
    </Routes>
  );
};

export default AppRoutes;

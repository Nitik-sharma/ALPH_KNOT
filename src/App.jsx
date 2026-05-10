import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import ScrollToTop from "./components/common/ScrollToTop";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />
<ScrollToTop/>
      {/* 🔥 ROUTES INSIDE LAYOUT */}
   <AppRoutes/>

      <Footer />
    </div>
  );
}

export default App;

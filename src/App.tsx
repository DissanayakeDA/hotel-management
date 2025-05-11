import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Rooms from "./pages/Rooms";
import SpecialOffers from "./pages/SpecialOffers";
export function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/special-offers" element={<SpecialOffers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

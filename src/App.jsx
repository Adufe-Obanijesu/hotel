import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing pages
import Homepage from "./Homepage";
import Rooms from "./Rooms";
import Services from "./Services";
import Restaurant from "./Restaurant";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";

// Importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Services />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
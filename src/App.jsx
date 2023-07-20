import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import MainPasting from "./pages/MainFilterPage/MainPasting";
import MainAllWork from "./pages/MainFilterPage/MainAllWork";
import MainWheels from "./pages/MainFilterPage/MainWheels";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/*" element={<Main />}>
          <Route path="" element={<MainAllWork />} />
          <Route path="pasting" element={<MainPasting />} />
          <Route path="wheels" element={<MainWheels />} />
        </Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

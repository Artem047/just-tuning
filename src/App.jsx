import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import { dataMainProject, dataMainWork } from "./utils/data/dataMain";
import { dataPasting, dataPastingProject } from "./utils/data/dataPasting";
import { dataWheels, dataWheelsProject } from "./utils/data/dataWheels";
import {
  dataAntichrome,
  dataAntichromeProject,
} from "./utils/data/dataAntichrome";
import {
  dataEquipping,
  dataEquippingProject,
} from "./utils/data/dataEquipping";
import { dataInterior, dataInteriorProject } from "./utils/data/dataInterior";
import { SearchProvider } from "./components/SearchContext";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Main />}>
            <Route
              index
              element={
                <MainPage data={dataMainWork} dataProject={dataMainProject} />
              }
            />
            <Route
              path="pasting"
              element={
                <MainPage data={dataPasting} dataProject={dataPastingProject} />
              }
            />
            <Route
              path="wheels"
              element={
                <MainPage data={dataWheels} dataProject={dataWheelsProject} />
              }
            />
            <Route
              path="antichrome"
              element={
                <MainPage
                  data={dataAntichrome}
                  dataProject={dataAntichromeProject}
                />
              }
            />
            <Route
              path="equipping"
              element={
                <MainPage
                  data={dataEquipping}
                  dataProject={dataEquippingProject}
                />
              }
            />
            <Route
              path="interior"
              element={
                <MainPage
                  data={dataInterior}
                  dataProject={dataInteriorProject}
                />
              }
            />
          </Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </SearchProvider>
    </div>
  );
}

export default App;

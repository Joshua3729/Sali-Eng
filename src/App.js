import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import WhatWeDo from "./Pages/WhatWeDo/WhatWeDo";
import Projects from "./Pages/Projects/Projects";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Navigation activeLink={location.pathname} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/WhatWeDo" element={<WhatWeDo />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

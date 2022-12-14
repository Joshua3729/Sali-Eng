import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import WhatWeDO2 from "./Pages/WhatWeDo2/WhatWeDo2";
import Projects from "./Pages/Projects/Projects";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Quote from "./Pages/Quote/Quote";
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
        <Route path="/WhatWeDo2" element={<WhatWeDO2 />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

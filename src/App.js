import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import WhatWeDo from "./Pages/WhatWeDo/WhatWeDo";
import Projects from "./Pages/Projects/Projects";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Navigation from "./Components/Navigation/Navigation";



const App = () => {
  return (

    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/AboutUs" element={ <AboutUsPage/>}/>
      <Route path="/WhatWeDo" element={ <WhatWeDo/>}/>
      <Route path="/Projects" element={ <Projects/>}/>
      <Route path="/ContactUs" element={ <ContactUs/>}/>
    </Routes>
    </>
  )
};

export default App;

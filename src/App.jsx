import  { useEffect, lazy, Suspense } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";

const About = lazy(() => import("./Components/About/About"));
const Experience = lazy(() => import("./Components/Experience/Experience"));
const Services = lazy(() => import("./Components/Services/Services"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));
const Testimonials = lazy(() => import("./Components/Testimonials/Testimonials"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div basename={window.location.pathname || 'React-portfolio'}>
      <Header />
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Experience />
        {/* <Services /> */}
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
      <Footer />
      </Suspense>
    </div>
  );
};

export default App;

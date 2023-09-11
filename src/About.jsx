import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutComponent from "./components/AboutComponent";
import TestimonyComponent from "./components/TestimonyComponent";
import GalleryComponent from "./components/GalleryComponent";

const About = ({ testimony }) => {
  return (
    <section>
      <Hero page="About Us" />
      <Services />
      <AboutComponent />
      <TestimonyComponent/>
      <GalleryComponent />
    </section>
  );
};

export default About;

import NavBar from "./components/NavBar";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import Showcase from "./sections/ShowCase";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
    </>
  );
};

export default App;

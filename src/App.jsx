import "./App.scss";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/Navbar";
import LogoCarousel from "./Components/LogoCarousel";
import FeaturesSection from "./Components/FeaturesSection";
import AboveFooterSection from "./Components/AboveFooterSection";
import Integrations from "./Components/Integrations";
import Customers from "./Components/Customers";
import Footer from "./Components/Footer";


const App = ()=>{

  return(
    
    <div className="wrapper">
      <NavBar/>
      <HeroSection/>
      <LogoCarousel/>
      <FeaturesSection/>
      <Integrations/>
      <Customers/>
      <AboveFooterSection/>
      <Footer/>
    </div>
  )
}

export default App;
import React from "react"
import StartTrialBtn from "./Common/StartTrialBtn";
import BlueHeading from "./Common/BlueHeading";
import SearchBar from "./Common/searchBar";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <BlueHeading text={"The World's Most Configurable"}/>
      <div className="heading-2">Travel & Expense Management Software</div>
      <div className="text-content">Configure <span>any</span> rule. Enable a world class mobile experience 
      for your users. Get seamless reporting & integrations. Inbuilt OCR expense scanning. Manage
       travel & non-travel expenses. Open APIs to connect with external systems.</div>

        <SearchBar/>

    </div>
  )
};

export default HeroSection;

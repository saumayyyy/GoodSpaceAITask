
import React from "react";
import BlueHeading from "./Common/BlueHeading";
import {features} from "../assets/data/features";
import FeatureCardComponent from "./Common/FeatureCardComponent";


const FeaturesSection = () => {
  return (
    <div className="featuresSection">
      <BlueHeading text={"Features that suit your needs"} />
      <div className="featuresGrid">
        {features.map((feature, i) => (
          <FeatureCardComponent
            key={i}
            title={feature.title}
            description={feature.description}
            comingSoon={feature.comingSoon}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

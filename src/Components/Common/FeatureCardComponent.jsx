import React from "react";
import featureImage from "../../assets/feature-card.png";

const FeatureCardComponent = ({ title, description, comingSoon }) => {
  return (
    <div className="feature-card">
      <div className="header">
        <h3 className="title">
          <img src={featureImage} alt="image" loading="lazy" className="feature-image"/>
          {title}
        </h3>
        {comingSoon && <span className="comingSoon">Coming Soon</span>}
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default FeatureCardComponent;
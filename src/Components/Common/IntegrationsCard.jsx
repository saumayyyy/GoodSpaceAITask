import React from "react"

const IntegrationsCard = ({title,description,image,type}) => {
  return (
    <div className={`integration-card ${type}`}>
      <div className="title-img">
        <img src={image} alt="" loading="lazy"/>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  )
};

export default IntegrationsCard;

import React from "react"

const CustCard = ({title,description,image,type,position}) => {
  return (
    <div className={`cust-card ${type}`}>
      <p>{description}</p>
      <div className="title-img">
        <img src={image} alt="" loading="lazy"/>
        <div className="name-pos">
            <h3>{title}</h3>
            <span>{position}</span>
        </div>
        
      </div>
    </div>
  )
};

export default CustCard;
import React from "react"
import BlueHeading from "./Common/BlueHeading";
import {integrationsData} from "../assets/data/Integrations";
import IntegrationsCard from "./Common/IntegrationsCard";
import flowchart from "../assets/flowchart.png";


const Integrations = () => {
  return (
    <div className="integrations">
      <BlueHeading text={"Integrations"}/>
      <img src={flowchart} alt="" className="img"/>
      <div className="card-container">
        {integrationsData.map((integration,i)=>{
          return <IntegrationsCard title={integration.title} 
          description={integration.description} 
          type={integration.type} key={i}
          image={integration.image_source}/>
        })}

      </div>
    </div>
  )
};

export default Integrations;

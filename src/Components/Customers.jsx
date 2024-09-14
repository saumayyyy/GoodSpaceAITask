import React from "react"
import BlueHeading from "./Common/BlueHeading";
import { cust_data } from "../assets/data/customers";
import CustCard from "./Common/CustCard";

const Customers = () => {
  return (
    <div className="customers">
      <BlueHeading text={"Our Customers Love Us"}/>
      <div className="cust-container">
        {cust_data.map((cust,i)=>{
            return <CustCard
                title={cust.title}
                description={cust.description}
                image={cust.image_source}
                type={cust.type}
                position={cust.position}
                key={i}
            />
        })}
      </div>
    </div>
  )
};

export default Customers;

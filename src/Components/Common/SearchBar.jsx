import React from "react"
import StartTrialBtn from "./StartTrialBtn";
const SearchBar = () => {
  return (
    <div className="search">
      <div className="cta">
            <input type="text" placeholder="Name"
            className="name-input"/>
            <input type="text" placeholder="Official Email ID"
            className="email-input"/>
            <StartTrialBtn/>
      </div>
        <div className="free-trial-info">
              30 Days free trial • Upto 10 users
        </div>
    </div>
  )
};

export default SearchBar;

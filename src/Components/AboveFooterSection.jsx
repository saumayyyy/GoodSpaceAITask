import React from "react"
import BlueHeading from "./Common/BlueHeading";
import SearchBar from "./Common/SearchBar";

const AboveFooterSection = () => {
  return (
    <div className="above-footer">
      <BlueHeading text={"Manage Your Travel and Expenses the smart way!"}/>
      <SearchBar/>
    </div>
  )
};

export default AboveFooterSection;

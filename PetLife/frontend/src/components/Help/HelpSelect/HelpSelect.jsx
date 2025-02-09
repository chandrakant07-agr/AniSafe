import React, { useState } from "react";
import "./HelpSelect.css";

const animalOptions = ["Dog", "Cat", "Bird"];
const locationOptions = ["Delhi", "Mumbai", "Bangalore", "Pune"];

function HelpSelect() {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <div className="helpselect">
    <div className="help-container">
    <h3>Need Assistance with Animals? Reach Out to Us!</h3>
    <div className="help-container1">
      <select
        className="dropdown"
        value={selectedAnimal}
        onChange={(e) => setSelectedAnimal(e.target.value)}
      >
        <option value="">Select Animal</option>
        {animalOptions.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>

      <select
        className="dropdown"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        <option value="">Select Location</option>
        {locationOptions.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
      <select className="dropdown" id="">
        <option value="Paid">Paid</option>
        <option value="Free">Free</option>
      </select>
    </div>
    </div>
    </div>
  );
}

export default HelpSelect;

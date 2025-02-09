import './HelpSelect.css'
import React, { useState } from 'react';
import './HelpSelect.css'

const breedOptions = {
  Dog: ["Labrador", "Pomeranian", "Golden Retriever"],
  Cat: ["Persian", "Siamese", "Maine Coon"],
  Bird: ["Parrot", "Sparrow", "Pigeon"]
};

const cityOptions = {
  Labrador: ["Delhi", "Mumbai", "Bangalore"],
  Pomeranian: ["Pune", "Chennai", "Hyderabad"],
  Persian: ["Jaipur", "Kolkata", "Lucknow"],
  Parrot: ["Surat", "Indore", "Patna"]
};

const shelterOptions = {
  Delhi: ["Happy Paws Shelter", "Animal Rescue Center"],
  Mumbai: ["Pet Haven", "Care for Paws"],
  Bangalore: ["Safe Paw Shelter", "Hope Animal Home"],
  Pune: ["Loving Hearts Shelter", "Guardian Angels"],
};

function HelpSelect(){
    const [selectedType, setSelectedType] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedShelter, setSelectedShelter] = useState('');
    return(
        <>
            <div>
      {/* First Dropdown - Select Pet Type */}
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">Select Pet Type</option>
        {Object.keys(breedOptions).map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      {/* Second Dropdown - Select Breed */}
      {selectedType && (
        <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
          <option value="">Select Breed</option>
          {breedOptions[selectedType]?.map((breed) => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      )}

      {/* Third Dropdown - Select City */}
      {selectedBreed && (
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Select City</option>
          {cityOptions[selectedBreed]?.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      )}

      {/* Fourth Dropdown - Select Shelter */}
      {selectedCity && (
        <select value={selectedShelter} onChange={(e) => setSelectedShelter(e.target.value)}>
          <option value="">Select Shelter</option>
          {shelterOptions[selectedCity]?.map((shelter) => (
            <option key={shelter} value={shelter}>{shelter}</option>
          ))}
        </select>
      )}
    </div>
        </>
    )
}

export default HelpSelect
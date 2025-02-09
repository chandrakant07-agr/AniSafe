import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPets } from '../../../hooks/useFetchPets';
import './showPet.css';

function ShowPet() {
    const { id } = useParams();
    const { pets, isLoading, error } = useFetchPets();
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    const pet = pets.find((pet) => pet._id === id);
  
    if (!pet) {
      return <p>Pet not found!</p>;
    }
  
    const {
      pet_name,
      pet_image,
      animal_type,
      gender,
      contact_number,
      city,
    } = pet;
  
    return (
        
      <div className="show-adopt-container">
        <hr />
        <div className="pet-details">
          <h1>{pet_name}</h1>
          <img src={pet_image} alt={pet_name} className="pet-image" />
          <div className="pet-info">
            <p>{animal_type} ({gender})</p>
            <p>Contact: {contact_number}</p>
            <p>City: {city}</p>
          </div>
        </div>
      </div>
      
    );
  }
  
  export default ShowPet;
  
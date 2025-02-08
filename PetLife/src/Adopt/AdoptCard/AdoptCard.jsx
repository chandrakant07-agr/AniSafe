import { useEffect, useState } from "react";
import './AdoptCard.css'

function AdoptCard() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pets")
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
      });
  }, []);
  

  return (
    <>
    <hr />
    <div className="available-container">
    <div className="availablepet">
      {pets.length === 0 ? (
        <p>No pets available for adoption at the moment.</p>
      ) : (
        <ul>
          {pets.map((pet) => (
            <div className="adoptcard">
            <li key={pet._id}>
              <img src={pet.pet_image} alt={pet.pet_name} className="availablepetimg"/>
              <h2>{pet.pet_name}</h2>
              <p>{pet.gender} ({pet.animal_type})</p>
            </li>
            </div>
          ))}
        </ul>
      )}
    </div>
    </div>
    </>
  );
}

export default AdoptCard;

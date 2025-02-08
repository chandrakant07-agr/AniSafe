import { useEffect, useState } from "react";

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
    <div>
      <h1>Available Pets for Adoption</h1>
      {pets.length === 0 ? (
        <p>No pets available for adoption at the moment.</p>
      ) : (
        <ul>
          {pets.map((pet) => (
            <li key={pet._id}>
              <img src={pet.pet_image} alt={pet.pet_name} />
              <h2>{pet.pet_name}</h2>
              <p>{pet.city}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdoptCard;

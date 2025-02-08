import { useFetchPets } from "../../../hooks/useFetchPets";
import { useNavigate } from "react-router-dom";
import './AdoptCard.css';

function AdoptCard() {
  const { pets } = useFetchPets();
  const navigate = useNavigate();

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
                <div 
                  className="adoptcard" 
                  key={pet._id}
                  onClick={() => navigate(`/adoptpet/${pet._id}`)}
                  style={{ cursor: "pointer" }} 
                >
                  <li>
                    <img src={pet.pet_image} alt={pet.pet_name} className="availablepetimg" />
                    <h2>{pet.pet_name}</h2>
                    <p>{pet.animal_type} ({pet.gender})</p>
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

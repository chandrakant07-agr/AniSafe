import { useEffect, useState } from "react";

export function useFetchPets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/pets")
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
        setLoading(false);
      });
  }, []);

  return { pets, loading };
}

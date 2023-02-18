import { useEffect } from "react";
import {
  getAllPetrolStations,
  removePetrolStation,
} from "../../services/petrolStationService";
import { useState } from "react";
import { PetrolStationContext } from "../../context/PetrolStationContext";
import { NavigationBar } from "../NavigationBar";
import { ListView } from "../ListView";

export const App = () => {
  const [petrolStations, setPetrolStations] = useState([]);

  useEffect(() => {
    async function getPetrolStations() {
      const data = await getAllPetrolStations();
      setPetrolStations(data);
    }

    getPetrolStations();
  }, []);

  return (
    <PetrolStationContext.Provider
      value={{
        petrolStations,
        removePetrolStation: async (id) => {
          await removePetrolStation(id);
          setPetrolStations((petrolStations) =>
            petrolStations.filter((p) => p.id !== id)
          );
        },
      }}
    >
      <NavigationBar />
      <div className="container">
        <h1>Petrol stations</h1>
        <div className="row">
          <div className="col">
            <ListView />
          </div>
          <div className="col">
            <ListView />
          </div>
        </div>
      </div>
    </PetrolStationContext.Provider>
  );
};

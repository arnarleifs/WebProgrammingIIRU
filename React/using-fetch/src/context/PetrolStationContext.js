import React from "react";

export const PetrolStationContext = React.createContext({
  petrolStations: [],
  removePetrolStation: () => {},
});

import React, { useContext } from "react";
import ListViewItem from "../ListViewItem";
import { PetrolStationContext } from "../../context/PetrolStationContext";

export const ListView = () => {
  const context = useContext(PetrolStationContext);
  return context.petrolStations.map((item) => (
    <ListViewItem key={item.id} {...item} />
  ));
};

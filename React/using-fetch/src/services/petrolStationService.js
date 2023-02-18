export const getAllPetrolStations = async () => {
  const response = await fetch("https://apis.is/petrol");
  const json = await response.json();

  return json?.results.map((d) => ({
    id: d.key,
    name: `${d.company} - ${d.name}`,
    fuelPrice: d.bensin95,
    dieselPrice: d.diesel,
  }));
};

export const removePetrolStation = async (id) => {
  const result = await fetch(`https://apis.is/petrol/${id}`, {
    method: "DELETE",
  });
  if (result.ok) {
    console.log("Succeeded!");
  }
};

/*
    Service to provide data for country, region and city
**/

const endpoint = "http://battuta.medunes.net/api";
const key = "00000000000000000000";

async function retrieveItemsWithFormat(url, format) {
  const response = await fetch(url);
  const items = await response.json();
  return items.map((c) => format(c));
}

export async function getCountries(format) {
  return retrieveItemsWithFormat(`${endpoint}/country/all/?key=${key}`, format);
}

export async function getRegions(countryCode = "is", format) {
  return retrieveItemsWithFormat(
    `${endpoint}/region/${countryCode}/all/?key=${key}`,
    format
  );
}

export async function getCities(countryCode = "is", regionName = "", format) {
  return retrieveItemsWithFormat(
    `${endpoint}/city/${countryCode}/search/?region=${regionName}&key=${key}`,
    format
  );
}

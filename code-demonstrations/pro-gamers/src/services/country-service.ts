/*
    Service to provide data for country, region and city
**/

import fetch from "fetch-jsonp";
import { Country } from "../types/country";
import { Region } from "../types/region";
import { City } from "../types/city";

const endpoint = "http://battuta.medunes.net/api";
const key = "5378fecca11e8e9222bb4f8f9d1c2848";

async function retrieveItemsWithFormat<T>(
  url: string,
  format: (item: T) => any
) {
  const response = await fetch(url);
  const items = await response.json();
  return (items as T[]).map((c) => format(c));
}

export async function getCountries(format: (country: Country) => any) {
  return retrieveItemsWithFormat(`${endpoint}/country/all/?key=${key}`, format);
}

export async function getRegions(
  countryCode = "is",
  format: (region: Region) => any
) {
  return retrieveItemsWithFormat(
    `${endpoint}/region/${countryCode}/all/?key=${key}`,
    format
  );
}

export async function getCities(
  countryCode = "is",
  regionName = "",
  format: (city: City) => any
) {
  return retrieveItemsWithFormat(
    `${endpoint}/city/${countryCode}/search/?region=${regionName}&key=${key}`,
    format
  );
}

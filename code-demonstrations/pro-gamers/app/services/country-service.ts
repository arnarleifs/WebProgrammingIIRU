/*
    Service to provide data for country, region and city
**/

import fetch from 'fetch-jsonp';

const countries = [
  {
    name: "Iceland",
    code: "is"
  },
  {
    name: "United States of America",
    code: "us"
  }
]

const regions = [
  {
    region: "reykjavik",
    displayName: "Höfuðborgarsvæðið",
    countryCode: "is",
  },
  {
    region: "akureyri",
    displayName: "Akureyri",
    countryCode: "is",
  },
  {
    region: "central",
    displayName: "Central region",
    countryCode: "us",
  },
  {
    region: "western",
    displayName: "Western region",
    countryCode: "us",
  },
]

const cities = [
  {
    regionCode: "reykjavik",
    cityCode: "reykjavik",
    displayName: "Reykjavík",
    countryCode: "is",
  },
  {
    regionCode: "reykjavik",
    cityCode: "kopavogur",
    displayName: "Kópavogur",
    countryCode: "is",
  }
]

const endpoint = "http://battuta.medunes.net/api";
const key = "5378fecca11e8e9222bb4f8f9d1c2848";

async function retrieveItemsWithFormat(url: string, format: (obj: any) => any) {
  const response = await fetch(url);
  const items = await response.json();
  return items.map((c: any) => format(c));
}

export async function getCountries(format: (obj: any) => any) {
  return retrieveItemsWithFormat(`${endpoint}/country/all/?key=${key}`, format);
}

export async function getRegions(countryCode = "is", format: (obj: any) => any) {
  return retrieveItemsWithFormat(
    `${endpoint}/region/${countryCode}/all/?key=${key}`,
    format
  );
}

export async function getCities(countryCode = "is", regionName = "", format: (obj: any) => any) {
  return retrieveItemsWithFormat(
    `${endpoint}/city/${countryCode}/search/?region=${regionName}&key=${key}`,
    format
  );
}

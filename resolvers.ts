import _ from 'lodash';
import countriesJson from './data/countryInfo.json';
import {
    City,
    Continent,
    Country
} from './types';

const isoToCountry = new Map();
const continentToCountry = new Map();
for (let c of countriesJson) {
    isoToCountry.set(c["ISO"], c);
    const continent = c["Continent"];
    if (!continentToCountry.has(continent)) {
        continentToCountry.set(continent, []);
    }
    continentToCountry.get(continent).push(c);
}

export const getCountry = (_parent: any, args: any): Country | null => {
    const iso = args.iso;
    let country = isoToCountry.get(iso);
    if (country !== null) {
        return _toCountry(country);
    }
    return null;
}

export const countryCapital = (parent: Country) : City => {
    const iso = parent.iso;
    let country = isoToCountry.get(iso);
    return {
        name: country["Capital"],
        country: parent,
    };
}

export const countryNeighbors = (parent: any): Array<Country> | null => {
    const neighbors = isoToCountry.get(parent.iso);
    if (neighbors === null || neighbors["neighbors"] === "Not available")
        return null;
    const isoList = neighbors["neighbours"].split(",");
    return _.map(isoList, (iso) => {
        const item = isoToCountry.get(iso);
        return _toCountry(item);
    });
}

export const countryContinent = (parent: any): Continent => {
    const country = isoToCountry.get(parent.iso);
    return {
        iso: country["Continent"],
    };
}

export const continentCountries = (parent: Continent, args: any): Array<Country> => {
    const continentIso = parent.iso || args.iso;
    const items = continentToCountry.get(continentIso);
    const countries = []
    for (let i of items) {
        countries.push(_toCountry(i));
    }
    return countries;
}

export const continentObject = (_parent: any, args: any): Continent => {
    return {
        iso: args.iso
    };
}

const _toCountry = (item: any): Country => {
    return {
        iso: item["ISO"],
        name: item["Country"],
        population: _.parseInt(item["Population"]),
        area: _.parseInt(item["Area(in sq km)"]),
        currency: item["CurrencyName"],
        languages: item["Languages"],
    }
};
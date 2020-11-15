import countriesJson from './data/countryInfo.json';

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

// TODO: use types. Maybe autogenerate ts interfaces from gql types.

export const getCountry = (_: any, args: any) => {
    const iso = args.iso;
    let country = isoToCountry.get(iso);
    if (country !== null) {
        return {
            iso: country["ISO"],
            name: country["Country"],
        };
    }
    return null;
}

export const countryCapital = (parent: any) => {
    const iso = parent.iso;
    let country = isoToCountry.get(iso);
    return {
        name: country["Capital"],
        country: parent,
    };
}

export const countryContinent = (parent: any) => {
    const country = isoToCountry.get(parent.iso);
    return {
        iso: country["Continent"],
    };
}

export const continentCountries = (parent: any) => {
    const continentIso = parent.iso;
    const items = continentToCountry.get(continentIso);
    const countries = []
    for (let i of items) {
        countries.push({
            iso: i["ISO"],
            name: i["Country"],
        });
    }
    return countries;
}
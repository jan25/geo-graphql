import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import {
    getCountry,
    countryCapital,
    countryContinent,
    countryNeighbors,
    continentCountries,
    continentObject,
} from './resolvers';

const resolvers = {
    Query: {
        getCountry,
        getContinent: continentObject,
    },
    Country: {
        capital: countryCapital,
        continent: countryContinent,
        neighbors: countryNeighbors,
    },
    Continent: {
        countries: continentCountries,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});


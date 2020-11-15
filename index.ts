import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import {
    getCountry,
    countryCapital,
    countryContinent,
    continentCountries,
} from './resolvers';

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
        books: () => books,
        getCountry,
    },
    Country: {
        capital: countryCapital,
        continent: countryContinent,
    },
    Continent: {
        countries: continentCountries,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});


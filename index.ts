import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import countries from './data/countryInfo.json';

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
    getCountry: (_: any, args: any) => {
      const iso = args.iso;
      let item = null;
      for (let c of countries) {
        if (c["ISO"] === iso) {
          item = c;
          break
        }
      }
      if (item !== null) {
        return {
          iso: item["ISO"],
          name: item["Country"],
        };
      }
      return null;
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


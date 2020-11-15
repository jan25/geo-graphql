import { gql } from 'apollo-server';

export default gql`

type Country {
    iso: String!
    name: String!
    # population: Int!
    # area: Int!
    # currency: String!
    # languages: [String!]!
    # currency: String!
    # capital: City!
    # neighbors: [Country!]!
    # continent: Continent!
}

type Continent {
    iso: String!
    countries: [Country!]!
}

type City {
    name: String!
    country: Country!
}

type Query {
    books: [Book]
    getCountry(iso: String!): Country
    # getContinent(iso: String!): Continent!
    # getCapitalCity(countryIso: String!): [City!]!
}

type Book {
    title: String
    author: String
}

`
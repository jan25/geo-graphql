# Geo API using GraphQL

GraphQL API to query Geo taxonomy data. Current implementation allows to query Country related information.

Sample Query:
```graphql
query {
  getCountry(iso:"US") {
    name
    capital {
      name
    }
    continent {
      iso
    }
    neighbors {
      name
      currency
      languages
    }
  }
}
```
Sample response:
```json
{
  "data": {
    "getCountry": {
      "name": "United States",
      "capital": {
        "name": "Washington"
      },
      "continent": {
        "iso": "NA"
      },
      "neighbors": [
        {
          "name": "Canada",
          "currency": "Dollar",
          "languages": "en-CA,fr-CA,iu"
        },
        {
          "name": "Mexico",
          "currency": "Peso",
          "languages": "es-MX"
        },
        {
          "name": "Cuba",
          "currency": "Peso",
          "languages": "es-CU,pap"
        }
      ]
    }
  }
}
```

## Run server

Run development server using below commands and visit [`http://localhost:4000/`](http://localhost:4000/)

```bash
npm install
npx run dev
```

To regenerate types from GraphQL schema, run:
```bash
npm run codegen
```

## TODO

- [ ] Implement fields in Country data
- [ ] Generate types based on gql schema
- [ ] Implement more taxonomies
- [ ] Improve error handling

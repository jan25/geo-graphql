# Geo API using GraphQL

GraphQL API to query Geo taxonomy data. Current implementation allows to query Country related information.

Sample API call:
```graphql
query {
  getCountry(iso:"IN") {
    name
    iso
    capital {
      name
    }
    continent {
      iso
      countries {
        name
        capital {
          name
        }
      }
    }
  }
}
```
Sample response:
```json
{
  "data": {
    "getCountry": {
      "name": "India",
      "iso": "IN",
      "capital": {
        "name": "New Delhi"
      },
      "continent": {
        "iso": "AS",
        "countries": [
          {
            "name": "United Arab Emirates",
            "capital": {
              "name": "Abu Dhabi"
            }
          },
          {
            "name": "Afghanistan",
            "capital": {
              "name": "Kabul"
            }
          },
          {
            "name": "Armenia",
            "capital": {
              "name": "Yerevan"
            }
          },
          {
            "name": "Azerbaijan",
            "capital": {
              "name": "Baku"
            }
          },
          
          ...
      }
    }
  }
}
```

## Run server

Run development server using below commands and visit [`http://localhost:4000/`](http://localhost:4000/)

```bash
npm install
npx nodemon
```

## TODO

- [ ] Implement fields in Country data
- [ ] Generate types based on gql schema
- [ ] Implement more taxonomies


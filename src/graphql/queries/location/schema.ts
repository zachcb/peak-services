import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    locations: [Location!]
    location(id: ID!): Location
  }

  extend type Mutation {
    createLocation(name: String!, coordinates: [Int]): Location
    deleteLocation(id: ID!): Boolean!
  }

  type Location {
    id: ID!
    name: String!
    coordinates: [Int]
  }

  extend type Subscription {
    locationCreated: LocationCreated!
  }

  type LocationCreated {
    location: Location!
  }
`;

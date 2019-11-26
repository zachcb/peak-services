import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    locations: [Location!]
    location(id: ID!): Location
  }

  type Location {
    id: ID!
    name: String!
    coordinates: [Int]
  }
`;

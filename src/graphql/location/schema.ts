import { gql } from "apollo-server-express";

export default gql`
  type Location {
    id: ID!
    name: String!
    coordinates: [Int]
  }
`;

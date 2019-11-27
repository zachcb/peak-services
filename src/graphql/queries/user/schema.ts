import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    queryIds: [String]
    locations: [Object]
  }`;

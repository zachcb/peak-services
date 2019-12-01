import { ApolloServer, gql } from "apollo-server-express";

import locationModel from "./queries/location/model";
import locationResolver from "./queries/location/resolver";
import locationSchema from "./queries/location/schema";

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

const schema = [
  linkSchema,
  locationSchema,
];

const resolvers = [
  locationResolver,
];

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models: {
      location: locationModel,
    },
  },
  playground: {
    endpoint: "/graphql",
    settings: {
      "editor.theme": "dark",
    },
  },
});

export default server;

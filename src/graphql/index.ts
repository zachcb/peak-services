import { ApolloServer } from "apollo-server-express";

import LocationResolver from "./location/resolver";
import LocationSchema from "./location/schema";

import QueryResolver from "./query/resolver";
import QuerySchema from "./query/schema";

const server = new ApolloServer({
  typeDefs: [
    QuerySchema,
    LocationSchema,
  ],
  resolvers: {
    Query: QueryResolver,
    Location: LocationResolver,
  },
  playground: {
    endpoint: "/graphql",
    settings: {
      "editor.theme": "dark",
    },
  },
});

export default server;

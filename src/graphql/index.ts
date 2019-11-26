import { ApolloServer } from "apollo-server-express";

import database from "../database";

import LocationResolver from "./location/resolver";
import LocationSchema from "./location/schema";
import LocationModel from "./location/model";

import QueryResolver from "./query/resolver";
import QuerySchema from "./query/schema";

const server = new ApolloServer({
  typeDefs: [
    QuerySchema,
    LocationSchema,
  ],
  context: {
    connectors: {
      pg: database,
    },
    models: {
      Location: new LocationModel({ db: "pg" }),
    },
  },
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

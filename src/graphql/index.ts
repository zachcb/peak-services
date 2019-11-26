import { ApolloServer } from "apollo-server-express";

import QueryType from "./types/Query";
import LocationType from "./types/Location";

import QueryResolver from "./resolvers/Query";
import LocationResolver from "./resolvers/Location";
// const QueryQuery = new GraphQLObjectType({
//   name: "QueryQueryType",
//   fields: {
//     location: {
//       type: LocationType,
//       args: { id: { type: GraphQLString } },
//       resolve(Query, args) {
//         return axios.get(`http://localhost:3000/locations/${args.id}`)
//           .then((response: object) => response.data);
//       },
//     },
//   },
// });


const server = new ApolloServer({
  typeDefs: [
    QueryType,
    LocationType,
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

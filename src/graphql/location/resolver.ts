export default {
  id: () => "1",
  name: () => "example",
  coordinates: () => [0, 0],
};

// args: { id: { type: GraphQLString } },
//       resolve(Query, args) {
//         return axios.get(`http://localhost:3000/locations/${args.id}`)
//           .then((response: object) => response.data);
//       },

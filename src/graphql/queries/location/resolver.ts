const locations = [
  {
    id: "1",
    name: "denver",
    coordinates: [0, 0],
  },
  {
    id: "1",
    name: "chicago",
    coordinates: [0, 0],
  },
  {
    id: "1",
    name: "columbia",
    coordinates: [0, 0],
  },
];

export default {
  Query: {
    locations: async () => locations,
  },

  Mutation: {
    createLocation: async (parent: object, location: object, { models }: any) => {
      const result = await models.location.create(location);
      return result;
    },
  },
};

import fs from "fs";
import datebase from "../../../database";

// const checkTableExistsQuery = fs.readFileSync("src/database/sql/check-table-exists.sql").toString();
// const createLocationsTableQuery = fs.readFileSync("src/database/sql/create-locations-table.sql").toString();
const createLocationQuery = fs.readFileSync("src/database/sql/create-location.sql").toString();

interface Create {
  name?: string;
  coordinates: [number, number];
}
// const tableExists = await datebase.query(
//   checkTableExistsQuery,
//   ["public", "locations"],
// );

// if (!tableExists.rows[0].exists) {
//   await datebase.query(
//     createLocationsTableQuery,
//   );
// }

export default (async () => ({
  async create({ name, coordinates }: Create) {
    try {
      const response = await datebase.query(
        createLocationQuery,
        [1, name, coordinates],
      );

      return response;
    } catch (error) {
      console.error(error.stack);
    }
  },
})
)();

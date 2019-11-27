import db from "../../../database";

interface Create {
  name?: string;
  coordinates: [number, number];
}

export default {
  async create({ name, coordinates }: Create) {
    try {
      const tableExists = await db.client.query(
        `SELECT EXISTS(
          SELECT 1
          FROM   information_schema.tables
          WHERE  table_schema = 'public'
          AND    table_name = 'locations'
        )`,
      );

      if (!tableExists.rows[0].exists) {
        await db.client.query(
          `CREATE TABLE locations(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            coordinates VARCHAR(100) NOT NULL
          )`,
        );
      }

      const response = await db.client.query(
        `INSERT INTO locations (
          id,
          name,
          coordinates
        )
        VALUES($1, $2, $3)
        RETURNING *`,
        [1, name, coordinates],
      );

      return response;
    } catch (error) {
      console.error(error.stack);
    }
  },
};

/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("locations", {
    id: "id",
    name: { type: "varchar(1000)", notNull: true },
    description: { type: "text", notNull: false },
    lat: { type: "decimal(9,6)", notNull: true },
    lng: { type: "decimal(9,6)", notNull: true },
    isActive: { type: "boolean", notNull: true, default: true },
    updatedAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {

};

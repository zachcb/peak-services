export default class Location {
  connectorKeys: [string];

  locations: [object];

  constructor(connectorKeys: [string]) {
    this.connectorKeys = connectorKeys;
  }

  public findByLocation(locationId: string, context: object): [object] {
    this.locations = context.pg.raw(
      "SELECT * FROM locations WHERE locationId = ?",
      locationId,
    );

    return this.locations;
  }
}

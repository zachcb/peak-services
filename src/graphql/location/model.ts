interface ConnectorKeys {
  db?: string;
}

export default class Location {
  connectorKeys: ConnectorKeys;

  locations: [object];

  constructor(connectorKeys: object) {
    this.connectorKeys = connectorKeys;
  }

  public findByLocation(locationId: string, context: any): [object] {
    this.locations = context.connectors[this.connectorKeys.db].raw(
      "SELECT * FROM locations WHERE locationId = ?",
      locationId,
    );

    return this.locations;
  }
}

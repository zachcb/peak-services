import errorHandler from "errorhandler";

import app from "./app";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection()
  .then(app)
  .catch((error) => console.log("TypeORM connection error: ", error));

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env"),
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;

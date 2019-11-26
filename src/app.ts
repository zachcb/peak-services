import path from "path";
import express from "express";
import flash from "express-flash";
import session from "express-session";
import graphqlHTTP from "express-graphql";
import redis from "redis";
import connectRedis from "connect-redis";
import lusca from "lusca";
import compression from "compression";
import bodyParser from "body-parser";
import passport from "passport";
import bluebird from "bluebird";

import router from "./router";
import apolloServer from "./graphql";

import { SESSION_SECRET } from "./util/secrets";

// Create Express server
const app = express();
apolloServer.applyMiddleware({ app });

const RedisStore = connectRedis(session);
const promisifyRedis = bluebird.promisifyAll(redis);
const redisClient = promisifyRedis.createClient({ host: "redis" });

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  store: new RedisStore({ client: redisClient }),
}));

app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

/**
 * Router
 */
app.use("/", router);


export default app;

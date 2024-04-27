import {createRequestHandler} from "@remix-run/express";
import {installGlobals} from "@remix-run/node";
import compression from "compression";
import express from "express";
import morgan from "morgan";

installGlobals();

/**
 * Global Configuration
 */
const PORT = process.env.APP_PORT || 3000
const HOSTNAME = process.env.APP_HOSTNAME || undefined

/**
 * Express configuration
 */
const app = express();
app.use(compression());
app.disable("x-powered-by");
app.use("/assets", express.static("./build/client/assets", {immutable: true, maxAge: "1y"}));
app.use(express.static("./build/client", {maxAge: "1h"}));
app.use(morgan("tiny"));
app.all("*", createRequestHandler({
    build: await import('./build/server/index.js'),
    getLoadContext: () => ({}),
}));

HOSTNAME ? app.listen(PORT, HOSTNAME, () =>
    console.log(`Express server listening at http://localhost:${PORT}`)
) : app.listen(PORT, () => {
    console.log(`Express server listening at http://localhost:${PORT}`)
});
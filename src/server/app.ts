import { addAliases } from "module-alias";
addAliases({
  "@root": __dirname,
  "@config": `${__dirname}/config`,
  "@libs": `${__dirname}/libs`,
  "@logs": `${__dirname}/logs`,
  "@middleware": `${__dirname}/middleware`,
  "@routes": `${__dirname}/routes`,
  "@services": `${__dirname}/services`,
  "@shared": `${__dirname}/shared`,
});

import Koa from "koa";
import config from "@config";
import { createContainer, Lifetime } from "awilix";
import { scopePerRequest, loadControllers } from "awilix-koa";
import { historyApiFallback } from "koa2-connect-history-api-fallback";
import ErrorHandler from "@middleware/ErrorHandler";
import { configure, getLogger } from "log4js";
import server from "koa-static";
import render from "koa-swig";
import co from "co";

const { port, viewDir, staticDir, memoryFlag } = config;

configure({
  appenders: {
    cheese: { type: "file", filename: `${__dirname}/logs/app.log` },
  },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});
const logger = getLogger("cheese");

const app = new Koa();
const container = createContainer();
container.loadModules([`${__dirname}/services/*.ts`], {
  formatName: "camelCase",
  resolverOptions: {
    lifetime: Lifetime.SCOPED,
  },
});
app.context.render = co.wrap(
  render({
    root: viewDir,
    autoescape: true,
    varControls: ["[[", "]]"],
    cache: memoryFlag, // disable, set to false
    ext: "html",
  })
);

app.use(server(staticDir));
app.use(scopePerRequest(container));
ErrorHandler.error(app, logger);
app.use(historyApiFallback({ index: "/", whiteList: ["/api"] }));
app.use(loadControllers(`${__dirname}/routes/*.ts`));

app.listen(port, function () {
  console.log(`server start at localhost:${port}`);
});

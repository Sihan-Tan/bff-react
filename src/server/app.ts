import { addAliases } from 'module-alias';
addAliases({
    '@root': __dirname,
    '@config': `${__dirname}/config`,
    '@libs': `${__dirname}/libs`,
    '@logs': `${__dirname}/logs`,
    '@middleware': `${__dirname}/middleware`,
    '@routes': `${__dirname}/routes`,
    '@services': `${__dirname}/services`,
    '@shared': `${__dirname}/shared`,
});

import Koa from 'koa';
import { createContainer, Lifetime } from 'awilix';
import { scopePerRequest, loadControllers } from 'awilix-koa'
import { historyApiFallback } from 'koa2-connect-history-api-fallback';

const app = new Koa();
const container = createContainer();
container.loadModules([`${__dirname}/services/*.ts`], {
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: Lifetime.SCOPED,
    },
});
app.use(scopePerRequest(container));
app.use(historyApiFallback({ index: '/', whiteList: ['/api'] }));
app.use(loadControllers(`${__dirname}/routes/*.ts`));

app.listen(3000, function () {
    console.log('server start at localhost:3000')
});

const server = app.listen();
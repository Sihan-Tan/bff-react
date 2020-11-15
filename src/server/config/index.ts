import { extend } from 'lodash';
import { join } from 'path';

let config = {
  viewDir: join(__dirname, '..', 'views'),
  staticDir: join(__dirname, '..', 'assets'),
  port: 3000,
  memoryFlag: false,
};
if (process.env.NODE_ENV === 'development') {
  const localConfig = {
    port: 3000,
  };
  config = extend(config, localConfig);
}
if (process.env.NODE_ENV === 'production') {
  const prodConfig = {
    port: 8082,
    memoryFlag: 'memory',
  };
  config = extend(config, prodConfig);
}

export default config;

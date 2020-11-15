import config from './config';

export var getData = function getData() {
  return config({
    url: '/api/list',
  });
};

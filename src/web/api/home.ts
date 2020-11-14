import config from "./config";

export const getData = () => {
  return config({
    url: "/api/list",
  });
};

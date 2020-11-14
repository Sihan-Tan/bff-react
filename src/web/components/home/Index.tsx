import React, { FC, useState, useEffect } from "react";
import { getData } from "@api/home";

const Title: FC<{ title: string }> = ({ children, title }) => {
  const [data, setData] = useState("");

  function getApiData() {
    getData().then((res) => {
      setData(res.data);
    });
  }

  useEffect(() => {
    getApiData();
  });

  return <div title={title}>{data}</div>;
};

export default Title;

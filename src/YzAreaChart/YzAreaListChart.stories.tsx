// Generated with util/create-component.js
import { Chart } from "@antv/g2";
import React, { useState, useEffect } from "react";
import YzAreaChart from "./YzAreaChart";

export const ListAreaListChart: React.FC<any> = () => {
  const [chart, setChart] = useState<Chart>();
  const [data, setData] = useState<Array<any>>();

  const dataSource = [
    { Data: "2009-12", item: "a", sales: 0 },
    { Data: "2009-12", item: "b", sales: 0 },
    { Data: "2009-12", item: "c", sales: 0 },
    { Data: "2010-01", item: "a", sales: 1500 },
    { Data: "2010-02", item: "a", sales: 1600 },
    { Data: "2010-03", item: "a", sales: 1700 },
    { Data: "2010-04", item: "a", sales: 1800 },
    { Data: "2010-05", item: "a", sales: 1900 },
    { Data: "2010-01", item: "b", sales: 1400 },
    { Data: "2010-02", item: "b", sales: 1500 },
    { Data: "2010-03", item: "b", sales: 1600 },
    { Data: "2010-04", item: "b", sales: 1700 },
    { Data: "2010-05", item: "b", sales: 1800 },
    { Data: "2010-01", item: "c", sales: 1300 },
    { Data: "2010-02", item: "c", sales: 1200 },
    { Data: "2010-03", item: "c", sales: 1100 },
    { Data: "2010-04", item: "c", sales: 900 },
    { Data: "2010-05", item: "c", sales: 800 },
  ];

  useEffect(() => {
    setData(dataSource);
    setTimeout(() => {
      setData(
        dataSource.concat([
          { Data: "2010-06", item: "a", sales: 2500 },
          { Data: "2010-06", item: "b", sales: 2600 },
          { Data: "2010-06", item: "c", sales: 2700 },
        ])
      );
    }, 3000);
  }, []);

  return (
    <YzAreaChart
      height={300}
      width={300}
      autoFit={true}
      xformat={(text) => {
        return `${text}年`;
      }}
      yformat={(text) => {
        return `${text}元`;
      }}
      data={data}
      xname="日期"
      xindex="Data"
      colorExp="item"
      yname="销售量"
      yindex="sales"
      getChartRef={($ref: Chart) => {
        console.log($ref);
        setChart($ref);
      }}
    />
  );
};

export default {
  title: "面积图",
  component: ListAreaListChart,
};

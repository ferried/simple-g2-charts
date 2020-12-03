// Generated with util/create-component.js
import { Chart } from "@antv/g2";
import React, { useState, useEffect } from "react";
import YzAreaChart from "./YzAreaChart";

export const SingleAreaChart: React.FC<any> = () => {
  const [chart, setChart] = useState<Chart>();
  const [data, setData] = useState<Array<any>>();

  const dataSource = [
    { Data: "2010-01", sales: 1998 },
    { Data: "2010-02", sales: 1850 },
    { Data: "2010-03", sales: 1720 },
    { Data: "2010-04", sales: 1818 },
    { Data: "2010-05", sales: 1920 },
    { Data: "2010-06", sales: 1802 },
    { Data: "2010-07", sales: 1945 },
    { Data: "2010-08", sales: 1856 },
    { Data: "2010-09", sales: 2107 },
    { Data: "2010-10", sales: 2140 },
    { Data: "2010-11", sales: 2311 },
    { Data: "2010-12", sales: 1972 },
  ];

  useEffect(() => {
    setData(dataSource);
    setTimeout(() => {
      setData(
        dataSource.concat([
          { Data: "2011-01", sales: 1500 },
          { Data: "2011-02", sales: 1600 },
          { Data: "2011-03", sales: 1400 },
        ])
      );
      setTimeout(() => {
        setData(
          dataSource.concat([
            { Data: "2011-04", sales: 1500 },
            { Data: "2011-05", sales: 1600 },
            { Data: "2011-06", sales: 2000 },
          ])
        );
      }, 3000);
    }, 3000);
  }, []);

  return (
    <YzAreaChart
      height={300}
      width={300}
      autoFit={true}
      xformat={(text) => {
        return `xformat: ${text}`;
      }}
      yformat={(text) => {
        return `yformat: ${text}`;
      }}
      data={data}
      xname="日期"
      xindex="Data"
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
  component: SingleAreaChart,
};

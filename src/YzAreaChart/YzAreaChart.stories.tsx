// Generated with util/create-component.js
import React, { useState, useEffect } from "react";
import YzAreaChart from "./YzAreaChart";

export const SingleAreaChart: React.FC<any> = () => {
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

  const [data, setData] = useState<Array<any>>(dataSource);

  useEffect(() => {
    setTimeout(() => {
      const b = data.concat(
        { Data: "2011-01", sales: 1760 },
        { Data: "2011-02", sales: 1824 },
        { Data: "2011-03", sales: 1801 },
        { Data: "2011-04", sales: 2001 },
        { Data: "2011-05", sales: 1640 },
        { Data: "2011-06", sales: 1502 },
        { Data: "2011-07", sales: 1621 },
        { Data: "2011-08", sales: 1480 },
        { Data: "2011-09", sales: 1549 },
        { Data: "2011-10", sales: 1390 },
        { Data: "2011-11", sales: 1325 },
        { Data: "2011-12", sales: 1250 }
      );
      setData(b);
    }, 3000);
  }, []);

  return (
    <YzAreaChart
      height={300}
      width={300}
      autoFit={true}
      data={data}
      xname="日期"
      xindex="Data"
      yname="销售量"
      yindex="sales"
    />
  );
};

export default {
  title: "面积图",
  component: SingleAreaChart,
};

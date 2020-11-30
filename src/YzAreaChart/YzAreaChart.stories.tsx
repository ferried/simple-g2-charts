// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import YzAreaChart from "./YzAreaChart";

let dataSource = [
  {
    Data: "2010-01",
    sales: 1998,
  },
  {
    Data: "2010-02",
    sales: 1850,
  },
  {
    Data: "2010-03",
    sales: 1720,
  },
  {
    Data: "2010-04",
    sales: 1818,
  },
  {
    Data: "2010-05",
    sales: 1920,
  },
  {
    Data: "2010-06",
    sales: 1802,
  },
  {
    Data: "2010-07",
    sales: 1945,
  },
  {
    Data: "2010-08",
    sales: 1856,
  },
  {
    Data: "2010-09",
    sales: 2107,
  },
  {
    Data: "2010-10",
    sales: 2140,
  },
  {
    Data: "2010-11",
    sales: 2311,
  },
  {
    Data: "2010-12",
    sales: 1972,
  },
  {
    Data: "2011-01",
    sales: 1760,
  },
  {
    Data: "2011-02",
    sales: 1824,
  },
  {
    Data: "2011-03",
    sales: 1801,
  },
  {
    Data: "2011-04",
    sales: 2001,
  },
  {
    Data: "2011-05",
    sales: 1640,
  },
  {
    Data: "2011-06",
    sales: 1502,
  },
  {
    Data: "2011-07",
    sales: 1621,
  },
  {
    Data: "2011-08",
    sales: 1480,
  },
  {
    Data: "2011-09",
    sales: 1549,
  },
  {
    Data: "2011-10",
    sales: 1390,
  },
  {
    Data: "2011-11",
    sales: 1325,
  },
  {
    Data: "2011-12",
    sales: 1250,
  },
  {
    Data: "2012-01",
    sales: 1394,
  },
  {
    Data: "2012-02",
    sales: 1406,
  },
  {
    Data: "2012-03",
    sales: 1578,
  },
  {
    Data: "2012-04",
    sales: 1465,
  },
  {
    Data: "2012-05",
    sales: 1689,
  },
  {
    Data: "2012-06",
    sales: 1755,
  },
  {
    Data: "2012-07",
    sales: 1495,
  },
  {
    Data: "2012-08",
    sales: 1508,
  },
  {
    Data: "2012-09",
    sales: 1433,
  },
  {
    Data: "2012-10",
    sales: 1344,
  },
  {
    Data: "2012-11",
    sales: 1201,
  },
  {
    Data: "2012-12",
    sales: 1065,
  },
  {
    Data: "2013-01",
    sales: 1255,
  },
  {
    Data: "2013-02",
    sales: 1429,
  },
  {
    Data: "2013-03",
    sales: 1398,
  },
  {
    Data: "2013-04",
    sales: 1678,
  },
  {
    Data: "2013-05",
    sales: 1524,
  },
  {
    Data: "2013-06",
    sales: 1688,
  },
  {
    Data: "2013-07",
    sales: 1500,
  },
  {
    Data: "2013-08",
    sales: 1670,
  },
  {
    Data: "2013-09",
    sales: 1734,
  },
  {
    Data: "2013-10",
    sales: 1699,
  },
  {
    Data: "2013-11",
    sales: 1508,
  },
  {
    Data: "2013-12",
    sales: 1680,
  },
  {
    Data: "2014-01",
    sales: 1750,
  },
  {
    Data: "2014-02",
    sales: 1602,
  },
  {
    Data: "2014-03",
    sales: 1834,
  },
  {
    Data: "2014-04",
    sales: 1722,
  },
  {
    Data: "2014-05",
    sales: 1430,
  },
  {
    Data: "2014-06",
    sales: 1280,
  },
  {
    Data: "2014-07",
    sales: 1367,
  },
  {
    Data: "2014-08",
    sales: 1155,
  },
  {
    Data: "2014-09",
    sales: 1289,
  },
  {
    Data: "2014-10",
    sales: 1104,
  },
  {
    Data: "2014-11",
    sales: 1246,
  },
  {
    Data: "2014-12",
    sales: 1098,
  },
  {
    Data: "2015-01",
    sales: 1189,
  },
  {
    Data: "2015-02",
    sales: 1276,
  },
  {
    Data: "2015-03",
    sales: 1033,
  },
  {
    Data: "2015-04",
    sales: 956,
  },
  {
    Data: "2015-05",
    sales: 845,
  },
  {
    Data: "2015-06",
    sales: 1089,
  },
  {
    Data: "2015-07",
    sales: 944,
  },
  {
    Data: "2015-08",
    sales: 1043,
  },
  {
    Data: "2015-09",
    sales: 893,
  },
  {
    Data: "2015-10",
    sales: 840,
  },
  {
    Data: "2015-11",
    sales: 934,
  },
  {
    Data: "2015-12",
    sales: 810,
  },
  {
    Data: "2016-01",
    sales: 782,
  },
  {
    Data: "2016-02",
    sales: 1089,
  },
  {
    Data: "2016-03",
    sales: 745,
  },
  {
    Data: "2016-04",
    sales: 680,
  },
  {
    Data: "2016-05",
    sales: 802,
  },
  {
    Data: "2016-06",
    sales: 697,
  },
  {
    Data: "2016-07",
    sales: 583,
  },
  {
    Data: "2016-08",
    sales: 456,
  },
  {
    Data: "2016-09",
    sales: 524,
  },
  {
    Data: "2016-10",
    sales: 398,
  },
  {
    Data: "2016-11",
    sales: 278,
  },
  {
    Data: "2016-12",
    sales: 195,
  },
  {
    Data: "2017-01",
    sales: 145,
  },
  {
    Data: "2017-02",
    sales: 207,
  },
];

export default {
  title: "YzAreaChart",
};

export const YzAreaChartComponent: React.FC<any> = () => {
  const [data, setData] = useState<Array<any>>(dataSource);

  useEffect(() => {
    setTimeout(() => {
      const b = data.concat([
        {
          Data: "2017-03",
          sales: 250,
        },
        {
          Data: "2017-04",
          sales: 260,
        },
        {
          Data: "2017-05",
          sales: 500,
        },
      ]);
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
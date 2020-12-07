// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import YzLongAreaChart from "./YzLongAreaChart";

export const LongAreaChartStory: React.FC<any> = () => {
  const source = [
    { time: "2009/6/12 2:00", flow: 0.97, rain: 0.77 },
    { time: "2009/6/12 3:00", flow: 0.96, rain: 0.88 },
    { time: "2009/6/12 4:00", flow: 0.96, rain: 0.99 },
    { time: "2009/6/12 5:00", flow: 0.95, rain: 2.0 },
    { time: "2009/6/12 6:00", flow: 0.95, rain: 3.88 },
    { time: "2009/6/12 7:00", flow: 0.94, rain: 4.77 },
    { time: "2009/6/12 8:00", flow: 0.94, rain: 8.55 },
    { time: "2009/6/12 9:00", flow: 0.94, rain: 10.0 },
    { time: "2009/6/12 10:00", flow: 0.94, rain: 12.13 },
    { time: "2009/6/12 11:00", flow: 0.9, rain: 0.01 },
  ];

  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    setData(source);
    setTimeout(() => {
      setData(
        data.concat([
          { time: "2009/9/19 13:00", flow: 49.01, rain: 3.022 },
          { time: "2009/9/19 14:00", flow: 51.95, rain: 1.589 },
          { time: "2009/9/19 15:00", flow: 55.04, rain: 0.86 },
          { time: "2009/9/19 16:00", flow: 58.27, rain: 0.807 },
          { time: "2009/9/19 17:00", flow: 61.66, rain: 0.645 },
          { time: "2009/9/19 18:00", flow: 65.21, rain: 0.595 },
          { time: "2009/9/19 19:00", flow: 68.92, rain: 0.588 },
          { time: "2009/9/19 20:00", flow: 72.8, rain: 0.557 },
          { time: "2009/9/19 21:00", flow: 88.09, rain: 0.552 },
          { time: "2009/9/19 22:00", flow: 104.9, rain: 1.271 },
          { time: "2009/9/19 23:00", flow: 105.7, rain: 0.708 },
          { time: "2009/9/20 0:00", flow: 110.3, rain: 0.677 },
          { time: "2009/9/20 1:00", flow: 111.6, rain: 0.629 },
          { time: "2009/9/20 2:00", flow: 110.3, rain: 0.714 },
          { time: "2009/9/20 3:00", flow: 106.5, rain: 0.203 },
          { time: "2009/9/20 4:00", flow: 105.7, rain: 0.133 },
          { time: "2009/9/20 5:00", flow: 103.3, rain: 0.061 },
          { time: "2009/9/20 6:00", flow: 100, rain: 0.062 },
          { time: "2009/9/20 7:00", flow: 97.02, rain: 0.018 },
          { time: "2009/9/20 8:00", flow: 98.8, rain: 0 },
        ])
      );
    }, 3000);
  }, []);

  return (
    <YzLongAreaChart
      id="YzLongAreaChart"
      data={data}
      xindex="time"
      autoFit={true}
      height={300}
      scales={[
        {
          index: "time",
          type: "time",
          tickCount: 8,
          mask: "M/DD HH:mm",
        },
        {
          index: "flow",
          alias: "流量(m^3/s)",
          color1: "#a50f15",
          color2: "#fee5d9",
          formatter: (v) => {
            return v + "毫升";
          },
        },
        {
          index: "rain",
          alias: "降雨量(mm)",
          color1: "#293c55",
          color2: "#f7f7f7",
          formatter: (v) => {
            return v + "毫升";
          },
        },
      ]}
    ></YzLongAreaChart>
  );
};

export default {
  title: "时间面积图",
  component: LongAreaChartStory,
};

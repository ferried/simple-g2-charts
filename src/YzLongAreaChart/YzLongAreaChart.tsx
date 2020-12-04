// Generated with util/create-component.js
import React, { useEffect, useState } from "react";

import { YzLongAreaChartProps } from "./YzLongAreaChart.types";

import "./YzLongAreaChart.scss";
import { Chart } from "@antv/g2";

const YzLongAreaChart: React.FC<YzLongAreaChartProps> = ({
  height,
  width,
  data,
  chartExp,
  colorExp,
  xindex,
  scales,
  autoFit,
  getChartRef,
  padding,
}) => {
  const [chart, setChart] = useState<Chart>();
  useEffect(() => {
    if (data && !chart) {
      const chart = new Chart({
        container: "container",
        height: height,
        width: width,
        autoFit: autoFit,
      });
      chart.data(data);
      if (scales && scales.length > 0) {
        const scale: any = {};
        scales.forEach((s) => {
          scale[s.index] = { ...s };
        });
        console.log(scale);
        chart.scale(scale);
      }
      chart.tooltip({
        showCrosshairs: true,
        follow: true,
        shared: true,
        crosshairs: {
          type: "xy", // 展示十字辅助线
        },
      });

      chart.option("slider", {
        start: 0,
        end: 1,
        trendCfg: {
          isArea: true,
        },
      });

      if (scales && scales.length > 0) {
        scales.forEach((s) => {
          if (s.index != xindex) {
            chart.axis(s.index, {
              grid: null,
              title: {},
            });
            chart
              .area()
              .position(chartExp ? chartExp : `${xindex}*${s.index}`)
              .color(
                colorExp ? colorExp : `l(100) 0:${s.color1} 1:${s.color2}`
              );
          }
        });
      }
      chart.interaction("element-visible-filter");
      chart.render();
      setChart(chart);
      if (getChartRef) {
        getChartRef(chart);
      }
    }
  }, [data, chart]);
  useEffect(() => {
    if (data && chart) {
      chart.changeData(data);
    }
  }, [data, chart]);
  return <div id="container"></div>;
};

export default YzLongAreaChart;

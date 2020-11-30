// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import { Chart } from "@antv/g2";
import { YzAreaChartProps } from "./YzAreaChart.types";

import "./YzAreaChart.scss";

const YzAreaChart: React.FC<YzAreaChartProps<any>> = ({
  height,
  width,
  data,
  xname,
  chartExp,
  colorExp,
  xindex,
  yname,
  yindex,
  autoFit,
  callback,
}) => {
  const [chart, setChart] = useState<Chart>(null);
  useEffect(() => {
    if (!chart) {
      const chart = new Chart({
        container: "container",
        width: width,
        height: height,
        autoFit: autoFit,
      });
      if (xname) {
        chart.axis(xindex, { title: {} });
        chart.scale(xindex, { alias: xname });
      }
      if (yname) {
        chart.axis(yindex, { title: {} });
        chart.scale(yindex, { alias: yname });
      }
      if (data) {
        chart.data(data);
      }
      if (chartExp) {
        chart.area().position(chartExp);
        if (colorExp) {
          chart.area().position(chartExp).color(colorExp);
        }
      } else {
        chart.area().position(`${xindex}*${yindex}`);
        chart.area().position(`${xindex}*${yindex}`).color(`${yindex}`);
      }
      chart.render();
      setChart(chart);
    } else {
      if (data) {
        chart.changeData(data);
      }
    }
    if (callback) {
      callback(chart);
    }
  });

  return <div id="container"></div>;
};

export default YzAreaChart;

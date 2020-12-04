// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import { Chart } from "@antv/g2";
import { YzAreaChartProps } from "./YzAreaChart.types";

import "./YzAreaChart.scss";

const YzAreaChart: React.FC<YzAreaChartProps> = ({
  height,
  width,
  data,
  chartExp,
  colorExp,
  xname,
  xindex,
  xformat,
  yname,
  yindex,
  yformat,
  autoFit,
  getChartRef,
}) => {
  const [chart, setChart] = useState<Chart>();

  // didMount 设置chart
  useEffect(() => {
    if (data && !chart) {
      const chart = new Chart({
        container: "container",
        height: height,
        width: width,
        autoFit: autoFit,
      });
      if (data) {
        chart.data(data);
      } else {
        chart.data([]);
      }
      if (xname && xindex) {
        if (xformat) {
          chart.axis(xindex, {
            label: {
              formatter: xformat,
            },
            title: {},
          });
        } else {
          chart.axis(xindex, { title: {} });
        }
        chart.scale(xindex, { alias: xname });
      }
      if (yname && yindex) {
        if (yformat) {
          chart.axis(yindex, {
            label: {
              formatter: yformat,
            },
            title: {},
          });
        } else {
          chart.axis(yindex, { title: {} });
        }
        chart.scale(yindex, { alias: yname });
      }
      if (chartExp) {
        if (colorExp) {
          chart.line().position(chartExp).color(colorExp);
          chart.area().position(chartExp).color(colorExp);
        } else {
          chart.line().position(chartExp);
          chart.area().position(chartExp);
        }
      } else if (xindex && yindex) {
        if (colorExp) {
          chart.line().position(`${xindex}*${yindex}`).color(colorExp);
          chart.area().position(`${xindex}*${yindex}`).color(colorExp);
        } else {
          chart.line().position(`${xindex}*${yindex}`);
          chart.area().position(`${xindex}*${yindex}`);
        }
      }
      chart.tooltip({
        showCrosshairs: true,
        follow: true,
        shared: true,
        crosshairs: {
          type: "xy", // 展示十字辅助线
        },
      });
      chart.render();
      setChart(chart);
      if (getChartRef) {
        getChartRef(chart);
      }
    }
  }, [data, chart]);

  // data变化触发
  useEffect(() => {
    if (data && chart) {
      chart.changeData([...data]);
    }
  }, [data, chart]);

  return <div id="container"></div>;
};

export default YzAreaChart;

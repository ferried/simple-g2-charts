/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-30 11:28:59
 * @LastEditTime: 2020-11-30 13:50:12
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /simple-g2-charts/src/YzAreaChart/YzAreaChart.types.ts
 * @LICENSE: Apache-2.0
 */
import { Chart } from '@antv/g2'
// Generated with util/create-component.js
export interface YzAreaChartProps<T> {
    data?: Array<T>;
    height?: number;
    width?: number;
    xname?: string;
    xindex?: string;
    yname?: string;
    yindex?: string;
    autoFit?: boolean;
    chartExp?: string;
    colorExp?: string;
    callback?: (chart: Chart) => void;
}



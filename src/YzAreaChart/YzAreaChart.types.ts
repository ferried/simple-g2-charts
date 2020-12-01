/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-30 11:28:59
 * @LastEditTime: 2020-11-30 18:39:40
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /simple-g2-charts/src/YzAreaChart/YzAreaChart.types.ts
 * @LICENSE: Apache-2.0
 */
import { Chart } from '@antv/g2'
// Generated with util/create-component.js
/**
 * 参数
 */
export interface YzAreaChartProps<T> {
    /**
     * 数据
     */
    data?: Array<T>;
    /**
     * 高度
     */
    height?: number;
    /**
     * 宽度
     */
    width?: number;
    /**
     * 横坐标名称
     */
    xname?: string;
    /**
     * 横坐标索引
     */
    xindex?: string;
    /**
     * 纵坐标名称
     */
    yname?: string;
    /**
     * 纵坐标索引
     */
    yindex?: string;
    /**
     * 自动fit
     */
    autoFit?: boolean;
    /**
     * 关联表达式
     */
    chartExp?: string;
    /**
     * 颜色关联表达式
     */
    colorExp?: string;
    /**
     * 回调函数
     */
    callback?: (chart: Chart) => void;
}



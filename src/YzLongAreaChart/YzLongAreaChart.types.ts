/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-12-03 21:19:34
 * @LastEditTime: 2020-12-04 10:33:55
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /simple-g2-charts/src/YzLongAreaChart/YzLongAreaChart.types.ts
 * @LICENSE: Apache-2.0
 */
// Generated with util/create-component.js

import { Chart } from "@antv/g2";
import { ListItem } from "@antv/g2/lib/dependents";
import { ScaleType } from "@antv/g2/lib/interface";


interface LongAreaScale {
    index?: string;
    alias?: string,
    type?: ScaleType;
    max?: number;
    min?: number;
    tickCount?: number;
    tickInterval?: number,
    mask?: string,
    color1?: string,
    color2?: string,
    formatter?: (text: any, key: any) => any;
}



export interface YzLongAreaChartProps {
    id: string,
    scales?: Array<LongAreaScale>;
    // padding
    padding?: Array<number>;
    /**
    * 数据
    */
    data?: Array<any>;
    /**
     * 高度
     */
    height?: number;
    /**
     * 宽度
     */
    width?: number;
    /**
     * 横坐标索引
     */
    xindex: string;
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
    getChartRef?: (chart: Chart) => void;
}

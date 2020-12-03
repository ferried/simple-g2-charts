/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-30 11:28:59
 * @LastEditTime: 2020-12-02 18:09:54
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /simple-g2-charts/src/YzAreaChart/YzAreaChart.types.ts
 * @LICENSE: Apache-2.0
 */
import { Chart } from '@antv/g2'
import { ListItem } from '@antv/g2/lib/dependents'

// Generated with util/create-component.js
type formatCallbackFunc = (text: string, item: ListItem, index: number) => any

/**
 * 参数
 */
export interface YzAreaChartProps {
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
     * 横坐标名称
     */
    xname?: string;
    /**
     * 横坐标索引
     */
    xindex?: string;
    /**
     * x坐标格式化
     */
    xformat?: formatCallbackFunc;
    /**
     * 纵坐标名称
     */
    yname?: string;
    /**
     * 纵坐标索引
     */
    yindex?: string;
    /**
     * y坐标格式化
     */
    yformat?: formatCallbackFunc;
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



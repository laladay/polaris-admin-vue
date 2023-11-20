import dayjs from 'dayjs'

import type { TimeFormatter } from './types'

/**
 * 时间工具类
 * @summary 用于处理日期、时间
 * @author Bruce Song <recall4056@gmail.com>
 * @license MIT
 */
export class TimeUtils {
  /**
   * dayjs
   * @description dayjs 的方法
   */
  static dayjs = dayjs

  /**
   * 格式化时间
   * @description 格式化时间
   * @param time 时间
   * @param format 格式化的格式，默认为 `YYYY-MM-DD HH:mm:ss`
   * @returns 格式化后的时间
   * @example
   * ```ts
   * TimeUtils.formatTime(new Date(), 'YYYY-MM-DD HH:mm:ss')
   * ```
   */
  static formatTime(time: string | number | Date, format: TimeFormatter = 'YYYY-MM-DD HH:mm:ss') {
    return dayjs(time).format(format)
  }

  /**
   * 获取时间差
   * @param start 开始时间
   * @param end 结束时间
   * @returns 时间差，单位：毫秒
   * @description 该方法的参数可以是 Date 对象，也可以是时间字符串
   * - 如果是字符串，会转换为 Date，然后再转换为时间戳
   * - 如果是 Date 对象，会转换为时间戳
   * @example
   * ```ts
   * TimeUtils.getDuration('2023-09-20 00:00:00', '2023-09-20 23:59:59')
   * ```
   */
  static getDuration(start?: string | Date, end?: string | Date): number {
    if (!start || !end) return 0
    const startTimestamp = typeof start === 'string' ? new Date(start).getTime() : start.getTime()
    const endTimestamp = typeof start === 'string' ? new Date(end).getTime() : start.getTime()
    return endTimestamp - startTimestamp
  }
}

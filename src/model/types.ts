/** 相应数据的基础接口 */
export interface RESPONSE_DATA<T> {
  code: number,
  data: T,
  msg?: string
}

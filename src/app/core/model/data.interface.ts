/** 表格資料 */
export interface Data {
  /** 作者 */
  author: string
  /** 圖片 */
  authorUrl: string
  /** 信箱 */
  email: string
  /** 功能 */
  function: Function | null
  /** 狀態 */
  status: string
  /** 雇用日 */
  employed: string
}

/** 功能 */
export interface Function {
  /** 角色 */
  role: string
  /** 組織 */
  place: string
}

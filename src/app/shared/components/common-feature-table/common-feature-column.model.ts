import {EmptyDataPipe} from '@my-app/pipes/empty-data.pipe'
import {PricePipe} from '@my-app/pipes/price.pipe'
import {Observable} from 'rxjs'

/**
 * 常用功能一覽表共用表格欄位
 */
export interface FeatureTableColumn {
  /**欄位 key */
  accessor: string
  /**表頭 */
  header: string | HeaderData
  /**副表頭 */
  subHeader?: string | HeaderData
  /**表頭第三行 */
  thirdHeader?: string | HeaderData
  /**階層 */
  level?: number
  /**th 的 class */
  thClass?: string
  /**td 的 class */
  tdClass?: string
  /**是否使用插槽 */
  useSlot?: boolean
  /**動態欄位 */
  cell?: (data: any) => string | number
}

export type HeaderData = (data: any) => string

/**
 * 常用功能一覽表共用函式
 */
export type FeatureTableColumnFn = (pricePipe: PricePipe, emptyDataPipe: EmptyDataPipe) => FeatureTableColumn[]

/**
 * 常用功能一覽表共用函式 Observable
 */
export type FeatureTableColumnFn$ = (
  pricePipe: PricePipe,
  emptyDataPipe: EmptyDataPipe,
) => Observable<FeatureTableColumn[]>

/**常用功能類型 */
export enum FeatureType {
  '保單基本資料' = 'Info',
  '保單給付資料' = 'Paid',
  '加值給付查詢' = 'Deposit',
  '停損停利點設定' = 'StopLossProfit',
  '理賠進度查詢' = 'Progress',
  '保單借款查詢' = 'Loan',
  '保險相關費用查詢' = 'Charge',
  '保單帳務查詢' = 'Billing',
  '配息紀錄查詢' = 'Dividend',
  '保單帳戶價值查詢' = 'Account',
}

const OFeatureType = {
  保單基本資料: 'Info',
  保單給付資料: 'Paid',
  加值給付查詢: 'Deposit',
  停損停利點設定: 'StopLossProfit',
  理賠進度查詢: 'Progress',
  保單借款查詢: 'Loan',
  保險相關費用查詢: 'Charge',
  保單帳務查詢: 'Billing',
  配息紀錄查詢: 'Dividend',
  保單帳戶價值查詢: 'Account',
} as const

/**常用功能類型 keys */
export type FeatureTypeKeys = keyof typeof FeatureType
/**常用功能類型 values */
export type FeatureTypeValues = typeof OFeatureType[keyof typeof OFeatureType]

/**
 * 從元件外部傳入的資料
 */
export interface ViewContext {
  $implicit: {
    /** 常用功能一覽表共用表格欄位 */
    column: FeatureTableColumn
    /** 資料 */
    row: any
    /** 索引 */
    index: number
  }
}

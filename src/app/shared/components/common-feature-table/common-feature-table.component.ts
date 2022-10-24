import {Component, ContentChild, EventEmitter, Input, Output, SimpleChanges, TemplateRef} from '@angular/core'
import {PageEvent} from '@angular/material/paginator'
import isFunction from 'lodash-es/isFunction'
import isString from 'lodash-es/isString'
import {FeatureTableColumn, ViewContext} from './common-feature-column.model'
/** 資料分割模式
 * @param loadMore - 載入更多
 * @param paginator - 分頁
 */
export enum SeparateDataType {
  /** 載入更多 */
  loadMore,
  /** 分頁 */
  paginator,
}
/**
 * 常用功能一覽表共用表格元件
 */
@Component({
  selector: 'app-common-feature-table',
  templateUrl: './common-feature-table.component.html',
  styleUrls: ['./common-feature-table.component.scss'],
})
export class CommonFeatureTableComponent {
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>
  /**Lodash */
  public isString = isString
  /**Lodash */
  public isFunction = isFunction
  /** JavaScript */
  Object = Object
  /** 保單筆數 */
  policyLength = 0
  /**預設原始資料*/
  dataListOrigin: unknown[] = []
  /**共用資料*/
  dataList: unknown[] = []
  /** 資料分割模式 */
  SeparateDataType: typeof SeparateDataType = SeparateDataType
  /**表格Class */
  @Input() tableClass?: string = ''
  /**資料展開長度，預設值為 8*/
  @Input() dataExpandLength: number = 8
  /** 共用資料 */
  @Input() data: unknown[] = []
  /** 共用表格欄位 */
  @Input() columns: FeatureTableColumn[] = []
  /**
   * Angular 元件 - 父元件更新子元件中的資料
   * 表格標題
   */
  @Output() trClick: EventEmitter<unknown> = new EventEmitter()
  /**
   * Angular 生命週期
   * 使用變更檢測鉤子
   * @param  changes - 物件表示的變更的雜湊表，這些物件以宣告的屬性名稱儲存在指令或元件上
   * @returns 無回傳值
   */
  ngOnChanges(changes: SimpleChanges): void {
    const {dataExpandLength, data, columns} = changes
    if (dataExpandLength?.currentValue || data?.currentValue || columns?.currentValue) {
      this.policyLength = this.data.length
      this.dataListOrigin = this.data
      this.dataList = this.data.slice(0, this.dataExpandLength)
    }
  }

  /**
   * 取得從元件外部傳入的資料
   * @param column - 定義表格欄位
   * @param row - 每個表格欄位的資料
   * @param index - 索引
   * @returns 回傳從元件外部傳入的資料
   */
  getTableViewContext(column: FeatureTableColumn, row: unknown, index: number): ViewContext {
    return {$implicit: {column, row, index}}
  }

  /**
   * 載入更多
   * @returns 無回傳值
   */
  loadMoreData(): void {
    const prevData = this.dataList
    const nextData = [...this.dataListOrigin].slice(prevData.length, prevData.length + this.dataExpandLength)
    this.dataList = [...prevData, ...nextData]
  }
  /**
   * 切換頁面時，切割當前分頁資料的方式
   * @param page - material切換頁面時傳遞的參數
   * @returns 無回傳值
   */
  changePage(page: PageEvent): void {
    const startDataIndex = this.dataExpandLength * page.pageIndex
    this.dataList = [...this.dataListOrigin].slice(startDataIndex, startDataIndex + 8)
  }
  /**
   * 表格標題
   * @param column - 表格欄位
   * @param data - 表格資料
   * @returns 回傳表格標題
   */
  header(column: FeatureTableColumn, data: any): string {
    return isFunction(column.header) ? column.header(data) : column.header
  }

  /**
   * 表格標題第二行
   * @param column - 表格欄位
   * @param data - 表格資料
   * @returns 回傳表格標題第二行
   */
  subHeader(column: FeatureTableColumn, data: any): string {
    if (!column.subHeader) return ''
    return isFunction(column.subHeader) ? column.subHeader(data) : column.subHeader
  }

  /**
   * 表格標題第三行
   * @param column - 表格欄位
   * @param data - 表格資料
   * @returns 回傳表格標題第三行
   */
  thirdHeader(column: FeatureTableColumn, data: any): string {
    if (!column.thirdHeader) return ''
    return isFunction(column.thirdHeader) ? column.thirdHeader(data) : column.thirdHeader
  }
}

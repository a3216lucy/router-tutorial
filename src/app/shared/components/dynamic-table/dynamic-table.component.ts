import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core'

/** 物件資料 */
export interface Obj {
  id: string
  account: string
  pet?: Pet[]
}

/** 寵物明細 */
export interface Pet {
  category: string
  color: string
}

interface Header {
  key: string
  index: number
}

export interface DynamicTable {
  headers: Header[]
  data: any[]
}

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  //優化元件更新的效率：變更元件的更新策略
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DynamicTableComponent {
  /** JavaScript */
  Object = Object

  tableData: DynamicTable = {
    headers: [],
    data: [],
  }

  constructor(private cdf: ChangeDetectorRef) {}

  render(headers: Header[], data: any) {
    this.tableData = {
      headers: headers,
      data,
    }
    this.cdf.detectChanges()
  }
}

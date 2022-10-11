import {Component} from '@angular/core'
import {Data} from './tables.interface'

/** 物件資料 */
export interface Obj {
  id: string
  account: string
  pet?: Pet[]
}

export interface Pet {
  category: string
  color: string
}

/** 表格頁面 */
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  /** JavaScript */
  Object = Object

  obj: Obj[] = [
    {
      id: '01',
      account: '',
      pet: [{category: 'cat', color: 'white'}],
    },
    {
      id: '02',
      account: '',
    },
  ]

  /** 表格資料 */
  data: Array<Data> = [
    {
      author: 'John Michael',
      authorUrl: '../assets/img/team-2.jpg',
      email: 'john@creative-tim.com',
      function: {
        role: 'Manager',
        place: 'Organization',
      },
      status: 'Online',
      employed: '2023-04-18',
    },
    {
      author: 'John Michael',
      authorUrl: '../assets/img/team-2.jpg',
      email: 'john@creative-tim.com',
      function: {
        role: 'Manager',
        place: 'Organization',
      },

      status: 'Offline',
      employed: '2023-04-18',
    },
  ]

  /**
   * 印出迴圈的資料
   * @param data - API 資料
   * @returns 無回傳值
   */
  printConsole(data: Data): void {
    console.log(data)
  }
}

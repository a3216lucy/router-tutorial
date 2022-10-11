import {Component} from '@angular/core'
import {Data} from './tables.interface'

/** 表格頁面 */
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
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

import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  /**資料 */
  data: any = [
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

      status: 'Online',
      employed: '2023-04-18',
    },
  ]

  constructor() {}

  /**
   * 印出迴圈的資料
   */
  printConsole(data: any): void {
    console.log(data)
  }
}

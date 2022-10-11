import {Component} from '@angular/core'
import {ProjectData} from 'src/app/model/projectData.interface'
import {Data} from '../../model/data.interface'

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

/** 表格頁面 */
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  /** JavaScript */
  Object = Object

  /** 寵物資料 */
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

  /** 專案資料 */
  projectData: Array<ProjectData> = [
    {
      project: 'Spotify',
      projectUrl: '../assets/img/small-logos/logo-spotify.svg',
      budget: 2500,
      status: 'working',
      completion: 60,
    },
    {
      project: 'Invision',
      projectUrl: '../assets/img/small-logos/logo-invision.svg',
      budget: 5000,
      status: 'done',
      completion: 100,
    },
    {
      project: 'Jira',
      projectUrl: '../assets/img/small-logos/logo-jira.svg',
      budget: 3400,
      status: 'canceled',
      completion: 30,
    },
    {
      project: 'Slack',
      projectUrl: '../assets/img/small-logos/logo-slack.svg',
      budget: 1000,
      status: 'canceled',
      completion: 0,
    },
    {
      project: 'Webdev',
      projectUrl: '../assets/img/small-logos/logo-webdev.svg',
      budget: 14000,
      status: 'working',
      completion: 80,
    },
    {
      project: 'Adobe XD',
      projectUrl: '../assets/img/small-logos/logo-xd.svg',
      budget: 2300,
      status: 'done',
      completion: 100,
    },
  ]

  /**
   * 印出迴圈的資料
   * @param data - API 資料
   * @returns 無回傳值
   */
  printConsole(data: Data | ProjectData): void {
    console.log(data)
  }
}

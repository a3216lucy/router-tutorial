import {AfterViewInit, Component, ViewChild} from '@angular/core'
import {DynamicTableComponent} from '@my-app/components/dynamic-table/dynamic-table.component'
import {Data} from '@my-app/core/model/data.interface'
import {ProjectData} from '@my-app/core/model/projectData.interface'
import {EmptyDataPipe} from 'src/app/shared/pipes/empty-data.pipe'
import {PricePipe} from 'src/app/shared/pipes/price.pipe'

/** 表格頁面 */
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  providers: [PricePipe, EmptyDataPipe],
})
export class TablesComponent implements AfterViewInit {
  @ViewChild('dynamicTableARef') dynamicTableARef!: DynamicTableComponent
  @ViewChild('dynamicTableBRef') dynamicTableBRef!: DynamicTableComponent
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
      status: '',
      completion: 30,
    },
    {
      project: 'Slack',
      projectUrl: '../assets/img/small-logos/logo-slack.svg',
      budget: 1000,
      status: '',
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

  ngAfterViewInit() {
    this.renderTableA()
    this.renderTableB()
  }

  renderTableA() {
    const headers = ['id', 'account'].map((header, headerIndex) => ({key: header, index: headerIndex}))
    const data: any[] = [
      {
        id: '01',
        account: 'cat',
        pet: [{category: 'cat', color: 'white'}],
      },
      {
        id: '02',
        account: 'dog',
      },
      {
        id: '03',
        account: '',
      },
    ]
    this.dynamicTableARef.render(headers, data)
  }

  renderTableB() {
    const tableBHeaders = ['project', 'budget', 'status', 'completion'].map((header, headerIndex) => ({
      key: header,
      index: headerIndex,
    }))
    const tableBData: any[] = this.projectData
    this.dynamicTableBRef.render(tableBHeaders, tableBData)
  }
}

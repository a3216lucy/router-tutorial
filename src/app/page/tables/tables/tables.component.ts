import {AfterViewInit, Component, ViewChild} from '@angular/core'
import {FeatureTableColumn} from '@my-app/components/common-feature-table/common-feature-column.model'
import {DynamicTableComponent} from '@my-app/components/dynamic-table/dynamic-table.component'
import {Data} from '@my-app/core/model/data.interface'
import {ProjectData} from '@my-app/core/model/projectData.interface'
import {EmptyDataPipe} from 'src/app/shared/pipes/empty-data.pipe'
import {PricePipe} from 'src/app/shared/pipes/price.pipe'

interface ITableDataC {
  data: any[]
  columns: FeatureTableColumn[]
}

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

  tableDataC: ITableDataC = {
    data: [],
    columns: [],
  }

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
    this.renderTableC()
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

  renderTableC() {
    setTimeout(() => {
      this.tableDataC = {
        data: this.data,
        columns: [
          {
            accessor: 'author',
            thClass: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7',
            header: '作者',
            cell: (data: Data) => `
            <div class="d-flex px-2 py-1" style="background-color:red">
            <div>
              <img src="${data.authorUrl}" class="avatar avatar-sm me-3" alt="user1" />
            </div>
            <div class="d-flex flex-column justify-content-center">
              <h6 class="mb-0 text-sm">${data.author}</h6>
              <p class="text-xs text-secondary mb-0">${data.email}</p>
            </div>
          </div>
            `,
          },
          {
            accessor: 'function',
            header: 'function',
            cell: (data: Data) => `
            <div>
            <p class="text-xs font-weight-bold mb-0">${data.function?.role}</p>
            <p class="text-xs text-secondary mb-0">${data.function?.place}</p>
            </div>
            `,
          },
          {
            accessor: 'status',
            header: '狀態',
            thClass: 'text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7',
            tdClass: 'align-middle text-center text-sm',
            cell: (data: Data) => {
              //   option + shift + 向下箭頭
              if (data.status === 'Online') {
                return `<span class="badge badge-sm bg-gradient-success"> ${data.status} </span>`
              }
              if (data.status === 'Offline') {
                return `<span class="badge badge-sm bg-gradient-secondary"> ${data.status} </span>`
              }
              return `<span>-</span>`
            },
          },
          {
            accessor: 'feature',
            header: '功能',
            useSlot: true,
          },
        ],
      }
    }, 0)
  }
}

// author: 'John Michael',
// authorUrl: '../assets/img/team-2.jpg',
// email: 'john@creative-tim.com',
// function: {
//   role: 'Manager',
//   place: 'Organization',
// },
// status: 'Online',
// employed: '2023-04-18',

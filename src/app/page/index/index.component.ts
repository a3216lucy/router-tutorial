import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core'
import {GetPopulationService} from 'src/app/shared/services/api/get-population.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit, OnDestroy, AfterViewInit {
  books = [
    {
      title: "TODAY'S MONEY",
      price: 53000,
      growth: '+55%',
      content: 'since yesterday',
      status: 'money',
      describe:
        'since yesterday Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id quisquam perferendis enim odit saepe, corrupti repellat voluptates fugiat sapiente sequi sunt nihil iure molestias reiciendis soluta dolore similique voluptatum totam iste fuga doloribus! Cumque tempora, quas id repellendus aut atque vel quod eligendi exercitationem voluptates nesciunt qui iste minus praesentium recusandae ipsam odit soluta expedita, magni, aliquam et veniam?',
    },
    {
      title: "TODAY'S USERS",
      price: 2300,
      growth: '3%',
      content: 'since last week',
      status: 'users',
      describe:
        'since last week Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id quisquam perferendis enim odit saepe, corrupti repellat voluptates fugiat sapiente sequi sunt nihil iure molestias reiciendis soluta dolore similique voluptatum totam iste fuga doloribus! Cumque tempora, quas id repellendus aut atque vel quod eligendi exercitationem voluptates nesciunt qui iste minus praesentium recusandae ipsam odit soluta expedita, magni, aliquam et veniam?',
    },
    {
      title: 'NEW CLIENTS',
      price: 3462,
      growth: '-2%',
      content: 'since last quarter',
      status: 'client',
      describe:
        'since last quarter Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id quisquam perferendis enim odit saepe, corrupti repellat voluptates fugiat sapiente sequi sunt nihil iure molestias reiciendis soluta dolore similique voluptatum totam iste fuga doloribus! Cumque tempora, quas id repellendus aut atque vel quod eligendi exercitationem voluptates nesciunt qui iste minus praesentium recusandae ipsam odit soluta expedita, magni, aliquam et veniam?',
    },
    {
      title: 'SALES',
      price: 103430,
      growth: '5%',
      content: 'than last month',
      status: 'sales',
      describe:
        'than last month Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id quisquam perferendis enim odit saepe, corrupti repellat voluptates fugiat sapiente sequi sunt nihil iure molestias reiciendis soluta dolore similique voluptatum totam iste fuga doloribus! Cumque tempora, quas id repellendus aut atque vel quod eligendi exercitationem voluptates nesciunt qui iste minus praesentium recusandae ipsam odit soluta expedita, magni, aliquam et veniam?',
    },
  ]

  cardDetail = {
    title: '',
    price: 0,
    growth: '',
    content: '',
    status: '',
    describe: '',
  }

  /** 人口資料 */
  peopleData: any = []

  /** 建構子 */
  constructor(
    // DI 注入服務
    private getPopulationService: GetPopulationService,
  ) {
    console.warn('constructor: DOM 尚未載入')

    this.getPopulationService.getPopulation().subscribe({
      next: (res: any) => {
        this.peopleData = res.result.records
      },
    })
  }

  ngOnInit() {
    console.warn('ngOnInit: 進入網頁時觸發，DOM 尚未載入')
    this.cardDetail = this.books[0]
  }

  ngAfterViewInit(): void {
    console.warn('ngAfterViewInit: 取得 DOM 之後執行')
  }

  ngOnDestroy() {
    console.warn('ngOnDestroy: 離開首頁時觸發')
  }

  showMessage($event: any) {
    this.cardDetail = $event
  }
}

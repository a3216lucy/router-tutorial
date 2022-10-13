import {HttpClient} from '@angular/common/http'
import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core'
import {GetPopulationService} from 'src/app/shared/services/api/get-population.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit, OnDestroy, AfterViewInit {
  books = []

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
    private http: HttpClient,
  ) {
    console.warn('constructor: DOM 尚未載入')

    this.getPopulationService.getPopulation().subscribe({
      next: (res: any) => {
        this.peopleData = res.result.records
      },
    })

    const requestBody = {status: 'user'}
    this.http.post('http://localhost:3000/api/books', requestBody).subscribe({
      next: (res: any) => {
        this.books = res.data ?? []
        if (this.books.length !== 0) {
          this.cardDetail = this.books[0]
        }
      },
    })
  }

  ngOnInit() {
    console.warn('ngOnInit: 進入網頁時觸發，DOM 尚未載入')
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

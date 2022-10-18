import {EmptyDataPipe} from './../../shared/pipes/empty-data.pipe'
import {OrderByPipe} from './../../shared/pipes/order-by.pipe'
import {HttpClient} from '@angular/common/http'
import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core'
import {NavbarService} from '@my-app/core/services/navbar.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [OrderByPipe, EmptyDataPipe],
})
export class IndexComponent implements OnInit, OnDestroy, AfterViewInit {
  books = []
  /** 儲存排序後的資料 */
  newArray: any = []

  cardDetail = {
    title: '',
    price: 0,
    growth: '',
    content: '',
    status: '',
    describe: '',
  }

  /** 排序用的資料 */
  array = [
    {turbine_name: null, wind_park: 'Bayone', time: '2012-03-01'},
    {turbine_name: 'Salstiegl ', wind_park: 'Salzst', time: '2010-03-01'},
    {turbine_name: 'Chradurga - SLL2', wind_park: 'Chiarga', time: '2011-03-01'},
    {turbine_name: 'Moilishte ', wind_park: 'Mogihte', time: '2014-03-01'},
    {turbine_name: 'Mogshte ', wind_park: 'Mogshte', time: '2016-03-01'},
  ]

  /** 建構子 */
  constructor(
    private http: HttpClient,
    public navbarService: NavbarService,
    /**  orderByPipe：資料排序處理 */
    private orderByPipe: OrderByPipe,
  ) {
    console.warn('constructor: DOM 尚未載入')

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
    // 資料排序處理
    // this.newArray = this.orderByPipe.transform(this.array,'time','asc')
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

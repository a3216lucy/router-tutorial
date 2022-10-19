import {Component, OnInit} from '@angular/core'
import {OriginCardData} from '@my-app/components/origin-card'
import {NavbarService} from '@my-app/core/services/navbar.service'
import {EmptyDataPipe, OrderByPipe} from '@my-app/pipes/index'
import {BehaviorSubject} from 'rxjs'
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [OrderByPipe, EmptyDataPipe],
})
export class IndexComponent implements OnInit {
  selectYear$ = new BehaviorSubject<string>('all')
  selectYearList: any[] = []
  books: OriginCardData[] = []
  cardDetail: OriginCardData = {
    title: '',
    price: 0,
    growth: '',
    content: '',
    status: '',
    describe: '',
  }

  /** 建構子 */
  constructor(
    public navbarService: NavbarService,
    /**  orderByPipe：資料排序處理 */
    private orderByPipe: OrderByPipe,
  ) {}

  ngOnInit() {
    this.navbarService._searchData$
      .pipe(
        map((searchData2Res) => {
          const mySet = new Set()
          const years = [...this.navbarService.originalSearchData].map((d: any) =>
            new Date(d.album.release_date).getFullYear(),
          )
          years.forEach((y) => {
            mySet.add(y)
          })

          /**年份不重複 */
          const uniqueYear = [...mySet].map((d) => ({year: d}))
          /**依年份排序 */
          const sortedYear = this.orderByPipe.transform(uniqueYear, 'year', 'desc')
          //更新年份 select
          this.selectYearList = ['all', ...sortedYear.map((d) => d.year)]

          /**新發售排行 */
          const no3 = [...searchData2Res]
          no3.splice(3, no3.length)
          this.books = no3.map((d: any) => ({
            title: d.name,
            price: d.duration,
            growth: d.album.release_date,
            content: d.album.artist.name,
            status: '',
            imageUrl: d.album.images[0].url,
            describe: '',
          })) as OriginCardData[]

          //新發售排行詳細內容，預設使用第一筆
          if (this.books[0]) {
            this.cardDetail = this.books[0]
          }
        }),
      )
      .subscribe()
  }

  changeSelect($event: any) {
    const year = $event.value
    if (year === 'all') {
      this.navbarService.updateSearch(this.navbarService.originalSearchData)
    } else {
      const filterData = [...this.navbarService.originalSearchData].filter(
        (d: any) => new Date(d.album.release_date).getFullYear() === year,
      )
      this.navbarService.updateSearch(filterData)
    }
    this.selectYear$.next($event.value)
  }

  showMessage($event: any) {
    this.cardDetail = $event
  }
}

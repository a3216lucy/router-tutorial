import {Component} from '@angular/core'
import {SearchService} from '@my-app/core/services/api/kkbox'
import {NavbarService} from '@my-app/core/services/navbar.service'
import {of} from 'rxjs'
import {map, shareReplay, tap} from 'rxjs/operators'
import {OrderByPipe} from './../../pipes/order-by.pipe'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // search 共用公式 Observable
  search$ = (request: any) =>
    this.searchService.search(request).pipe(
      map((res) => res.tracks.data),
      // 可以放 side effect 的地方
      tap((data) => {
        // 日期排序，ES6 JS-淺拷貝(Shallow Copy) VS 深拷貝(Deep Copy)
        const abc = [...data].sort(
          (a, z) => new Date(z.album.release_date).getTime() - new Date(a.album.release_date).getTime(),
        )
        /**取前3筆 */
        abc.splice(3, abc.length)
        this.navbarService.searchData3$ = of(abc)
      }),
      // cache api
      shareReplay(1),
    )

  /** 建構子 */
  constructor(
    private searchService: SearchService,
    private navbarService: NavbarService,
    private orderByPipe: OrderByPipe,
  ) {}

  ngOnInit() {
    const request = {
      q: 'Taylor Swift',
      type: 'track',
      territory: 'TW',
    }
    //Observable
    this.navbarService.searchData2$ = this.search$(request)

    //BehaviorSubject
    // this.searchService.search(request).subscribe({
    //   next: (res) => {
    //     this.navbarService.searchData$.next(res.tracks.data)
    //   },
    // })
  }

  changeInput($event: Event) {
    const inputValue = ($event.target as HTMLInputElement).value
    const request = {
      q: inputValue,
      type: 'track',
      territory: 'TW',
    }
    //Observable
    this.navbarService.searchData2$ = this.search$(request)

    //BehaviorSubject
    // this.searchService.search(request).subscribe({
    //   next: (res) => {
    //     this.navbarService.searchData$.next(res.tracks.data)
    //   },
    // })
  }
}

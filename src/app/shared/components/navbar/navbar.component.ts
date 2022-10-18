import {Component} from '@angular/core'
import {SearchService} from '@my-app/core/services/api/kkbox'
import {NavbarService} from '@my-app/core/services/navbar.service'
import {map, shareReplay} from 'rxjs/operators'

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
      // cache api
      shareReplay(1),
    )

  /** 建構子 */
  constructor(private searchService: SearchService, private navbarService: NavbarService) {}

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

import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs'
import {map, shareReplay, tap} from 'rxjs/operators'
import {SearchService} from './api/kkbox'

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  // kkbox search api 共用公式 Observable
  search$ = (request: any) =>
    this.searchService.search(request).pipe(
      map((res) => res.tracks.data),
      map((data) => {
        // 依日期新到舊排序
        const sortedOriginData = [...data].sort(
          (a, z) => new Date(z.album.release_date).getTime() - new Date(a.album.release_date).getTime(),
        )
        //備份原始資料
        this.originalSearchData = sortedOriginData
        return sortedOriginData
      }),
      tap((d) => {
        this.updateSearch(d)
      }),
      // cache api
      shareReplay(1),
    )

  _searchData$ = new BehaviorSubject<any>([])
  searchData$ = this._searchData$.asObservable()
  originalSearchData: any[] = []

  constructor(private searchService: SearchService) {}

  updateSearch(data: any) {
    this._searchData$.next(data)
  }
}

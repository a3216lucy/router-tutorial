import {Injectable} from '@angular/core'
import {Datum} from '@my-app/core/model/kkbox/search'
import {BehaviorSubject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  searchData$ = new BehaviorSubject<Datum[]>([])
  searchData2$: Observable<any> = new Observable()
  searchData3$: Observable<any> = new Observable()

  //Observable 更新
  // this.searchData2$ = Observable
  // Observable 取值
  // this.searchData2$ | async
}

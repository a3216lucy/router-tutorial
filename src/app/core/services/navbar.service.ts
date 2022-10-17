import {Injectable} from '@angular/core'
import {Datum} from '@my-app/model/kkbox/search'
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  searchData$ = new BehaviorSubject<Datum[]>([])
}

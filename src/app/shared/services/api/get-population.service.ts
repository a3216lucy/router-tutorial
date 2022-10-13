import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class GetPopulationService {
  constructor(private http: HttpClient) {}

  /**
   * 取得人口數量的 API
   * @returns 回傳 population api 的 Observable
   */
  getPopulation(): Observable<any> {
    return this.http.get('/api/v1/rest/datastore/301000000A-000605-067')
  }
}

import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {GetChartPlaylistsRequest, GetChartPlaylistsResponse} from '@my-app/core/model/kkbox/get-chart-playlists'
import {Observable} from 'rxjs'

/**
 * 取得各大排行榜清單
 */
@Injectable({
  providedIn: 'root',
})
export class GetChartPlaylistsService {
  constructor(private http: HttpClient) {}

  getChartPlaylists(data: GetChartPlaylistsRequest): Observable<GetChartPlaylistsResponse> {
    const objToString = new URLSearchParams(Object.entries(data)).toString()
    return this.http.get<GetChartPlaylistsResponse>(`https://api.kkbox.com/v1.1/charts?${objToString}`)
  }
}

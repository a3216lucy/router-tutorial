import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {GetANewHitsPlaylistRequest, GetANewHitsPlaylistResponse} from '@my-app/core/model/kkbox/get-a-new-hits-playlist'
import {Observable} from 'rxjs'

/**
 * 取得各大排行榜詳細資料
 */
@Injectable({
  providedIn: 'root',
})
export class GetANewHitsPlaylistService {
  constructor(private http: HttpClient) {}

  getANewHitsPlaylist(data: GetANewHitsPlaylistRequest): Observable<GetANewHitsPlaylistResponse> {
    const objToString = new URLSearchParams(Object.entries(data)).toString()
    return this.http.get<GetANewHitsPlaylistResponse>(
      `https://api.kkbox.com/v1.1/new-hits-playlists/DZrC8m29ciOFY2JAm3?territory=TW?${objToString}`,
    )
  }
}

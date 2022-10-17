import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import * as qs from 'qs'

/** */
export interface GuestTokenRes {
  /** */
  access_token: string
  /** */
  token_type: string
  /** */
  expires_in: number
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /** 登入 */
  login() {
    const request = {
      grant_type: 'client_credentials',
      client_id: '5c3def3666acf30a8151b725576dcf7d',
      client_secret: '54bd2719c92ca2f67efff243e116dba2',
    }
    const option = {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    }

    // var formData: any = new FormData()
    // formData.append('grant_type', 'client_credentials')
    // formData.append('client_id', '5c3def3666acf30a8151b725576dcf7d')
    // formData.append('client_secret', '54bd2719c92ca2f67efff243e116dba2')

    return this.http.post<GuestTokenRes>('/oauth2/token', qs.stringify(request), option)
  }
}

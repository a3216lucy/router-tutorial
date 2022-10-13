import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() {}
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = req.clone({setHeaders: {Authorization: 'Bearer 123456'}})
    return next.handle(newRequest)
  }
}

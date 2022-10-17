import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {LayoutModule} from './layout/layout.module'
import {TablesComponent} from './page/tables/tables.component'
import {ApiInterceptor} from './shared/interceptors/api.interceptor'

/**
 * 根模組
 */
@NgModule({
  declarations: [AppComponent, TablesComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, LayoutModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {LayoutModule} from './layout/layout.module'
import {TablesComponent} from './page/tables/tables.component'
import {ApiInterceptor} from './shared/interceptors/api.interceptor'
import {PipesModule} from './shared/pipes/pipes.module'

/**
 * 根模組
 */
@NgModule({
  declarations: [AppComponent, TablesComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, LayoutModule, PipesModule],
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

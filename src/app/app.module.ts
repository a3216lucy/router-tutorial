import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {LayoutComponent} from './layout/layout.component'
import {IndexComponent} from './page/index/index.component'

/**
 * 根模組
 */
@NgModule({
  declarations: [AppComponent, LayoutComponent, IndexComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

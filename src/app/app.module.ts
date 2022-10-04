import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './page/register/register.component';
import { IndexComponent } from './page/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LayoutComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

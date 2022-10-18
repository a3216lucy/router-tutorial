import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {OrderByPipe} from './../../pipes/order-by.pipe'
import {NavbarComponent} from './navbar.component'

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatInputModule, MatIconModule],
  exports: [NavbarComponent],
  providers: [OrderByPipe],
})
export class NavbarModule {}

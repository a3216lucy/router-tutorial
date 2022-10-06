import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {LoginRoutingModule} from './login-routing.module'
import {LoginComponent} from './login.component'

/**
 * 登入頁模組
 */
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}

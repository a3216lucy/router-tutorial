import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {LoginRoutingModule} from './login-routing.module'
import {LoginComponent} from './login.component'

/**
 * 登入頁模組
 */
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, MatInputModule, MatIconModule, ReactiveFormsModule],
})
export class LoginModule {}

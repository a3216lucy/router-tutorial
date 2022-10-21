import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {EmailInputModule} from '@my-app/components/reactive-form-field/email-input'
import {RegisterRoutingModule} from './register-routing.module'
import {RegisterComponent} from './register.component'

/**
 * 註冊頁模組
 */
@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, MatInputModule, MatIconModule, EmailInputModule],
})
export class RegisterModule {}

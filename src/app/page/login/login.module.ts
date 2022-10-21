import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {EmailInputModule} from '@my-app/components/reactive-form-field/email-input'
import {ControlMessageModule} from 'src/app/shared/components/control-messages/control-message.module'
import {PasswordInputModule} from './../../shared/components/reactive-form-field/password-input/password-input.module'
import {LoginRoutingModule} from './login-routing.module'
import {LoginComponent} from './login.component'

/**
 * 登入頁模組
 */
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    ControlMessageModule,
    FormsModule,
    EmailInputModule,
    PasswordInputModule,
  ],
})
export class LoginModule {}

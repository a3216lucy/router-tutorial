import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon'
import {ControlMessageModule} from '@my-app/components/control-messages/control-message.module'
import {PasswordInputComponent} from './password-input.component'

@NgModule({
  declarations: [PasswordInputComponent],
  imports: [CommonModule, MatFormFieldModule, MatIconModule, ControlMessageModule],
  exports: [PasswordInputComponent],
})
export class PasswordInputModule {}

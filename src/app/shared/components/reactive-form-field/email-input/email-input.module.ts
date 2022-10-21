import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {ControlMessageModule} from '@my-app/components/control-messages/control-message.module'
import {EmailInputComponent} from './email-input.component'

@NgModule({
  declarations: [EmailInputComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, ControlMessageModule],
  exports: [EmailInputComponent],
})
export class EmailInputModule {}

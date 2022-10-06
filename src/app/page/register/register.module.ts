import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'

import {RegisterRoutingModule} from './register-routing.module'
import {RegisterComponent} from './register.component'

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, MatInputModule, MatIconModule],
})
export class RegisterModule {}

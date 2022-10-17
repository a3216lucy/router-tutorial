import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {NavbarModule} from './../shared/components/navbar/navbar.module'
import {LayoutComponent} from './layout.component'

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, NavbarModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}

import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {RegisterComponent} from './register.component'

/** 註冊頁路由設定 */
const routes: Routes = [{path: '', component: RegisterComponent}]

/**
 * 註冊頁路由模組
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}

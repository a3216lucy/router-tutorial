import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LoginComponent} from './login.component'

/** 登入頁路由設定 */
const routes: Routes = [{path: '', component: LoginComponent}]

/**
 * 登入頁路由模組
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

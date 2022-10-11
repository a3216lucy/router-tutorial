import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LayoutComponent} from './layout/layout.component'
import {IndexComponent} from './page/index/index.component'
import {TablesComponent} from './page/tables/tables.component'

/** 根路由設定 */
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  // 首頁 index
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'index', component: IndexComponent},
      {path: 'tables', component: TablesComponent},
    ],
  },
  // 註冊頁 sign up
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then((m) => m.RegisterModule),
  },
  // 登入頁 sign in
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then((m) => m.LoginModule),
  },
]

/**
 * 根路由模組
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

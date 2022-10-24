import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AuthGuard} from './core/guards/auth.guard'
import {LayoutComponent} from './layout/layout.component'

/** 根路由設定 */
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  // 首頁 index
  {
    path: '',
    component: LayoutComponent,
    children: [
      // 首頁 index
      {
        path: 'index',
        loadChildren: () => import('./page/index/index.module').then((m) => m.IndexModule),
      },
      // 表格頁 tables
      {
        path: 'tables',
        loadChildren: () => import('./page/tables/table.module').then((m) => m.TableModule),
      },
    ],
    canActivate: [AuthGuard],
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

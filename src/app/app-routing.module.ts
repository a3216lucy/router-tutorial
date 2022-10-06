import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LayoutComponent} from './layout/layout.component'
import {IndexComponent} from './page/index/index.component'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  {
    path: '',
    component: LayoutComponent,
    children: [{path: 'index', component: IndexComponent}],
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then((m) => m.LoginModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

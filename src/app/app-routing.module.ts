import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './page/index/index.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'index', component: IndexComponent },
    ]
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

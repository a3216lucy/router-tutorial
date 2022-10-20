import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DetailComponent} from './detail/detail.component'
import {IndexComponent} from './index/index.component'

const routes: Routes = [
  {path: '', component: IndexComponent},
  // 必要參數-建立
  //   {path: ':id', component: DetailComponent},
  // 非必要參數 query params -建立
  {path: 'detail', component: DetailComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}

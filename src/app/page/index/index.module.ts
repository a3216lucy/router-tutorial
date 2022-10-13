import {CommonModule} from '@angular/common'
import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {OriginCardModule} from 'src/app/shared/components/origin-card/origin-card.module'
import {IndexRoutingModule} from './index-routing.module'
import {IndexComponent} from './index.component'

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, IndexRoutingModule, OriginCardModule, HttpClientModule],
})
export class IndexModule {}

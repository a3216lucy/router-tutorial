import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {IndexComponent} from './index.component'

import {OriginCardModule} from 'src/app/shared/components/origin-card/origin-card.module'
import {IndexRoutingModule} from './index-routing.module'

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, IndexRoutingModule, OriginCardModule],
})
export class IndexModule {}

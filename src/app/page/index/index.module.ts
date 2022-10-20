import {CommonModule} from '@angular/common'
import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {MatSelectModule} from '@angular/material/select'
import {OriginCardModule} from 'src/app/shared/components/origin-card/origin-card.module'
import {DirectiveModule} from 'src/app/shared/directive/directive.module'
import {PipesModule} from './../../shared/pipes/pipes.module'
import {IndexRoutingModule} from './index-routing.module'
import {IndexComponent} from './index.component'

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    OriginCardModule,
    HttpClientModule,
    PipesModule,
    MatSelectModule,
    DirectiveModule,
  ],
})
export class IndexModule {}

import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {DynamicTableModule} from '@my-app/components/dynamic-table/dynamic-table.module'
import {PipesModule} from '@my-app/pipes/pipes.module'

import {TableRoutingModule} from './table-routing.module'
import {TablesComponent} from './tables/tables.component'

@NgModule({
  declarations: [TablesComponent],
  imports: [CommonModule, TableRoutingModule, DynamicTableModule, PipesModule],
})
export class TableModule {}
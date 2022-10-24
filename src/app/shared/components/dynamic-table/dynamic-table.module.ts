import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {PipesModule} from '@my-app/pipes/pipes.module'
import {DynamicTableComponent} from './dynamic-table.component'

@NgModule({
  declarations: [DynamicTableComponent],
  imports: [CommonModule, PipesModule],
  exports: [DynamicTableComponent],
})
export class DynamicTableModule {}

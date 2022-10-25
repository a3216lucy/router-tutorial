import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {PipesModule} from '@my-app/pipes/pipes.module'
import {CommonFeatureTableComponent} from './common-feature-table.component'

@NgModule({
  declarations: [CommonFeatureTableComponent],
  imports: [CommonModule, PipesModule],
  exports: [CommonFeatureTableComponent],
})
export class CommonFeatureTableComponentModule {}

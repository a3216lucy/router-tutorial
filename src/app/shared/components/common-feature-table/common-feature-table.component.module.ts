import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {CommonFeatureTableComponent} from './common-feature-table.component'

@NgModule({
  declarations: [CommonFeatureTableComponent],
  imports: [CommonModule],
  exports: [CommonFeatureTableComponent],
})
export class CommonFeatureTableComponentModule {}

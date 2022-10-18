import {PricePipe} from './price.pipe'
import {NgModule} from '@angular/core'
import {EmptyDataPipe} from './empty-data.pipe'
import {OrderByPipe} from './order-by.pipe'

const pipes = [PricePipe, EmptyDataPipe, OrderByPipe]

/**
 * 專案共用管道模組
 */
@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class PipesModule {}

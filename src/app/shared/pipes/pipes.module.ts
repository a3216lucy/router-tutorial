import {NgModule} from '@angular/core'
import {EmptyDataPipe} from './empty-data.pipe'
import {OrderByPipe} from './order-by.pipe'
import {PricePipe} from './price.pipe'
import {SafeHtmlPipe} from './safe-html.pipe'

const pipes = [PricePipe, EmptyDataPipe, OrderByPipe, SafeHtmlPipe]

/**
 * 專案共用管道模組
 */
@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class PipesModule {}

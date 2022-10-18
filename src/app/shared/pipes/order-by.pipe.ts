import {Pipe, PipeTransform} from '@angular/core'
import {orderBy} from 'lodash'

/**
 * 資料排序處理
 */
@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: any, sortBy: string, order: any): any[] {
    // 順排 desc ，逆排 asc
    const sortOrder = order ? order : 'asc'

    return orderBy(array, [sortBy], [sortOrder])
  }
}

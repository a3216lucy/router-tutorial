import {Component} from '@angular/core'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  cardA = {title: '標題一', price: 111, growth: '1%', content: 'aaa', status: 'Online'}
  cardB = {title: '標題二', price: 111, growth: '2%', content: 'bbb', status: 'Offline'}
  cardC = {title: '標題三', price: 111, growth: '3%', content: 'ccc', status: 'Offline'}
  cardD = {title: '標題四', price: 111, growth: '4%', content: 'ddd', status: 'Offline'}
}

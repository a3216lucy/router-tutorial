import {Component, OnDestroy, OnInit} from '@angular/core'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit, OnDestroy {
  books = [
    {
      title: '標題一',
      price: 111,
      growth: '1%',
      content: 'aaa',
      status: 'Online',
      describe:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id quisquam perferendis enim odit saepe, corrupti repellat voluptates fugiat sapiente sequi sunt nihil iure molestias reiciendis soluta dolore similique voluptatum totam iste fuga doloribus! Cumque tempora, quas id repellendus aut atque vel quod eligendi exercitationem voluptates nesciunt qui iste minus praesentium recusandae ipsam odit soluta expedita, magni, aliquam et veniam?',
    },
    {
      title: '標題二',
      price: 111,
      growth: '2%',
      content: 'bbb',
      status: 'Offline',
      describe:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id quisquam perferendis enim odit saepe, corrupti repellat voluptates fugiat sapiente sequi sunt nihil iure molestias reiciendis soluta dolore similique voluptatum totam iste fuga doloribus! Cumque tempora, quas id repellendus aut atque vel quod eligendi exercitationem voluptates nesciunt qui iste minus praesentium recusandae ipsam odit soluta expedita, magni, aliquam et veniam?',
    },
    {
      title: '標題三',
      price: 111,
      growth: '3%',
      content: 'ccc',
      status: 'Offline',
      describe:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id quisquam perferendis enim odit saepe, corrupti repellat voluptates fugiat sapiente sequi sunt nihil iure molestias reiciendis soluta dolore similique voluptatum totam iste fuga doloribus! Cumque tempora, quas id repellendus aut atque vel quod eligendi exercitationem voluptates nesciunt qui iste minus praesentium recusandae ipsam odit soluta expedita, magni, aliquam et veniam?',
    },
    {
      title: '標題四',
      price: 111,
      growth: '4%',
      content: 'ddd',
      status: 'Offline',
      describe:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id quisquam perferendis enim odit saepe, corrupti repellat voluptates fugiat sapiente sequi sunt nihil iure molestias reiciendis soluta dolore similique voluptatum totam iste fuga doloribus! Cumque tempora, quas id repellendus aut atque vel quod eligendi exercitationem voluptates nesciunt qui iste minus praesentium recusandae ipsam odit soluta expedita, magni, aliquam et veniam?',
    },
  ]

  cardDetail = {
    title: '',
    price: 0,
    growth: '',
    content: '',
    status: '',
    describe: '',
  }

  ngOnInit() {
    console.log('進入網頁時觸發')
    this.cardDetail = this.books[0]
  }

  ngOnDestroy() {
    console.log('離開首頁時觸發')
  }

  showMessage($event: any) {
    this.cardDetail = $event
  }
}

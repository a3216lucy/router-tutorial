import {Component, EventEmitter, Input, Output} from '@angular/core'

interface OriginCardData {
  title: string
  price: number
  growth: string
  content: string
  // Offline, Online
  status: string
}

@Component({
  selector: 'app-origin-card',
  templateUrl: './origin-card.component.html',
  styleUrls: ['./origin-card.component.scss'],
})
export class OriginCardComponent {
  @Input() originCardData: OriginCardData = {
    title: '',
    price: 0,
    growth: '',
    content: '',
    status: 'Offline',
  }

  //事件資料傳遞
  @Output() showMessage = new EventEmitter()

  // class
  dynamicClass(status: string) {
    const obj: any = {
      money: {
        color: 'primary',
        text: 'money',
      },
      users: {
        color: 'danger',
        text: 'users',
      },
      client: {
        color: 'success',
        text: 'client',
      },
      sales: {
        color: 'warning',
        text: 'sales',
      },
    }
    if (obj[status].text === status) {
      return `bg-gradient-${obj[status].color} shadow-${obj[status].color}`
    }
    return ''
  }

  // ngClass
  dynamicNgClass(status: string) {
    // 正常版
    return {
      'bg-gradient-danger': status === 'Offline',
      'bg-gradient-primary': status === 'Online',
      'shadow-danger': status === 'Offline',
      'shadow-primary': status === 'Online',
    }
  }

  show() {
    this.showMessage.emit(this.originCardData)
  }
}

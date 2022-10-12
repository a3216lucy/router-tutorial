import {Component, Input} from '@angular/core'

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

  // class
  dynamicClass(status: string) {
    const obj: any = {
      Online: {
        color: 'primary',
        text: 'Online',
      },
      Offline: {
        color: 'danger',
        text: 'Offline',
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
}
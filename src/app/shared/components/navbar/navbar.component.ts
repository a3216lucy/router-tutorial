import {Component, OnInit} from '@angular/core'
import {NavbarService} from '@my-app/core/services/navbar.service'
import {take} from 'rxjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  /** 建構子 */
  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    const request = {
      q: 'Taylor Swift',
      type: 'track',
      territory: 'TW',
    }
    this.navbarService.search$(request).pipe(take(1)).subscribe()
  }
  changeInput($event: Event) {
    const inputValue = ($event.target as HTMLInputElement).value
    const request = {
      q: inputValue,
      type: 'track',
      territory: 'TW',
    }

    this.navbarService.search$(request).pipe(take(1)).subscribe()
  }
}

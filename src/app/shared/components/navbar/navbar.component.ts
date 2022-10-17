import {Component} from '@angular/core'
import {SearchService} from '@my-app/core/services/api/kkbox'
import {NavbarService} from '@my-app/core/services/navbar.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private searchService: SearchService, private navbarService: NavbarService) {}

  ngOnInit() {
    const request = {
      q: 'Taylor Swift',
      type: 'track',
      territory: 'TW',
    }
    this.searchService.search(request).subscribe({
      next: (res) => {
        this.navbarService.searchData$.next(res.tracks.data)
      },
    })
  }

  changeInput($event: Event) {
    const inputValue = ($event.target as HTMLInputElement).value
    const request = {
      q: inputValue,
      type: 'track',
      territory: 'TW',
    }
    this.searchService.search(request).subscribe({
      next: (res) => {
        this.navbarService.searchData$.next(res.tracks.data)
      },
    })
  }
}

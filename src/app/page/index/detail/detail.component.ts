import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {SearchService} from '@my-app/core/services/api/kkbox'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,

    private searchService: SearchService,
  ) {}

  ngOnInit(): void {
    // 必要參數-取資料
    // this.route.paramMap.subscribe({
    //   next: (param) => {
    //     const id = param.get('id')
    //     this.searchService.search({q: id, territory: 'TW', type: 'track,album,artist,playlist'}).subscribe(console.log)
    //   },
    // })

    this.route.queryParamMap.subscribe({
      next: (query) => {
        // 非必要參數-取資料
        const playlistId = query.get('playlistId')
        this.searchService
          .search({q: playlistId, territory: 'TW', type: 'track,album,artist,playlist'})
          .subscribe(console.log)
      },
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { RssParserService } from '../../services';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private rssSvc: RssParserService
  ) { }

  ngOnInit() {
    this.rssSvc.readFeed('https://www.rte.ie///radio1/podcast/podcast_whitenoise.xml')
      .subscribe((result) => {
        console.log(result);
      });
  }

}

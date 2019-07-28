import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  source: string = 'https://www.rte.ie/podcasts/2019/pc/pod-v-26071960m04sdave_clarke_whitenoise_708_hq.mp3';

  constructor() { }

  ngOnInit() {
  }

}

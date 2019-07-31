import { Injectable } from '@angular/core';
import { Observable, defer } from 'rxjs';

const RssParser = window.require('rss-parser');

@Injectable({
  providedIn: 'root'
})
export class RssParserService {

  private parser = new RssParser();

  constructor() { }

  public readFeed(url: string): Observable<any> {
    console.log('been heere');
    return defer( async () => await this.parser.parseURL(url));
  }
}

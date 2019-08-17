import { Injectable } from '@angular/core';
import { Observable, defer } from 'rxjs';

import { Output } from 'rss-parser';
const RssParser = window.require('rss-parser');

@Injectable({
  providedIn: 'root'
})
export class RssParserService {

  private parser: typeof RssParser = null;

  constructor() { }

  public readFeed(url: string): Observable<Output> {
    this.initParser();
    return defer(async () => await this.parser.parseURL(url));
  }

  private initParser(): void {
    if (this.parser === null) {
      this.parser = new RssParser();
    }
  }
}

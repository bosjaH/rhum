import { TestBed } from '@angular/core/testing';

import { RssParserService } from './rss-parser.service';

describe('RssParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RssParserService = TestBed.get(RssParserService);
    expect(service).toBeTruthy();
  });
});

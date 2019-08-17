import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PodcastsEffects } from './podcasts.effects';

describe('PodcastsEffects', () => {
  let actions$: Observable<any>;
  let effects: PodcastsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PodcastsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<PodcastsEffects>(PodcastsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

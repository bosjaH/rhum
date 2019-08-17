import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { PodcastsActionTypes, PodcastsActions } from './podcasts.actions';



@Injectable()
export class PodcastsEffects {


  @Effect()
  loadPodcastss$ = this.actions$.pipe(
    ofType(PodcastsActionTypes.LoadPodcastss),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<PodcastsActions>) {}

}

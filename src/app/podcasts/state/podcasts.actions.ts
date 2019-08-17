import { Action } from '@ngrx/store';

export enum PodcastsActionTypes {
  LoadPodcastss = '[Podcasts] Load Podcastss',
  
  
}

export class LoadPodcastss implements Action {
  readonly type = PodcastsActionTypes.LoadPodcastss;
}


export type PodcastsActions = LoadPodcastss;

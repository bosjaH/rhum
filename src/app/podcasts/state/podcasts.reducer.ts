
import { PodcastsActions, PodcastsActionTypes } from './podcasts.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: PodcastsActions): State {
  switch (action.type) {

    case PodcastsActionTypes.LoadPodcastss:
      return state;

    default:
      return state;
  }
}

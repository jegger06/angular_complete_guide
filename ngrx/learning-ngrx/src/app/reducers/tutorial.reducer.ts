import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

const initialState: Tutorial = {
  name: 'Initial tutorial',
  url: 'http://google.com'
};

export function reducer(state: Array<Tutorial> = [initialState], action: TutorialActions.Actions) {
  switch(action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      state = state.filter((val, i) => i !== action.payload);
      return state;
    default:
      return state;
  }
}
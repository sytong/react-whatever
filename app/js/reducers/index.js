import {
  SEARCH_ASSETS, RECEIVE_ASSETS,
} from '../actions';

const assets = (state = {
  items: [],
}, action) => {
  switch (action.type) {
    case SEARCH_ASSETS:
      return {
        ...state,
      };
    case RECEIVE_ASSETS:
      return {
        ...state,
        items: action.assets,
      };
    default:
      return state;
  }
};

export default assets;

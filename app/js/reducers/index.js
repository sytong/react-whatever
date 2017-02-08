import { combineReducers } from 'redux';
import {
  RECEIVE_ASSETS, SELECT_ASSET,
} from '../actions';

const assetList = (state = {
  items: [],
}, action) => {
  switch (action.type) {
    case RECEIVE_ASSETS:
      return {
        ...state,
        items: action.assets,
      };
    default:
      return state;
  }
};

const selectedAsset = (state = '', action) => {
  switch (action.type) {
    case SELECT_ASSET:
      return action.asset;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  assetList,
  selectedAsset,
});


export default rootReducer;

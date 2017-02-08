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

const selectedAsset = (state = {
  id: '',
  symbol: '',
  description: '',
}, action) => {
  switch (action.type) {
    case SELECT_ASSET: {
      const { asset } = action;
      return {
        id: asset.id,
        symbol: asset.symbol,
        description: asset.options.description,
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  assetList,
  selectedAsset,
});


export default rootReducer;

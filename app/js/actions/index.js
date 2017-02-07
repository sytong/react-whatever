import { Apis } from 'graphenejs-ws';

export const SEARCH_ASSETS = 'SEARCH_ASSETS';
export const RECEIVE_ASSETS = 'RECEIVE_ASSETS';

export const searchAssets = (symbol, count) => ({
  type: SEARCH_ASSETS,
  symbol,
  count,
});

export const receiveAssets = (symbol, assets) => ({
  type: RECEIVE_ASSETS,
  symbol,
  assets,
});

export const listAssets = (symbol, count) => (dispatch) => {
  Apis.instance().db_api().exec('list_assets', [symbol, count])
    .then(assets => dispatch(receiveAssets(symbol, assets)));
};

import { Apis } from 'graphenejs-ws';

export const RECEIVE_ASSETS = 'RECEIVE_ASSETS';
export const SELECT_ASSET = 'SELECT_ASSET';

export const receiveAssets = (symbol, assets) => ({
  type: RECEIVE_ASSETS,
  symbol,
  assets,
});

export const selectAsset = asset => ({
  type: SELECT_ASSET,
  asset,
});

export const listAssets = (symbol, count) => (dispatch) => {
  Apis.instance().db_api().exec('list_assets', [symbol, count])
    .then(assets => dispatch(receiveAssets(symbol, assets)));
};

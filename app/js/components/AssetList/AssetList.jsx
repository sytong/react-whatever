import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectAsset } from '../../actions';
import AssetSearchForm from './AssetSearchForm';

const AssetList = ({ assets, onSelectAsset }) => (
  <div id='asset_list'>
    <h1>Asset List</h1>
    <AssetSearchForm />
    <ul>
      {
        assets.map(asset =>
          (
            <li key={ asset.dynamic_asset_data_id }>
              <a href='#' onClick={ () => onSelectAsset(asset) }>
                { asset.symbol }
              </a>
            </li>
          ),
        )
      }
    </ul>
  </div>
);


AssetList.propTypes = {
  assets: PropTypes.array.isRequired,
  onSelectAsset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { assetList } = state;
  return {
    assets: assetList.items,
  };
};

const mapDispatchToProps = dispatch => (
  {
    onSelectAsset: (asset) => {
      dispatch(selectAsset(asset));
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(AssetList);

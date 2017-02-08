import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectAsset } from '../../actions';

const AssetList = ({ assets, onSelectAsset }) => (
  <div id='asset_list'>
    <ul>
      {
        assets.map(asset =>
          (
            <li key={ asset.dynamic_asset_data_id }>
              <a href='/' onClick={ event => onSelectAsset(event, asset) }>
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
    onSelectAsset: (event, asset) => {
      event.preventDefault();
      dispatch(selectAsset(asset));
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(AssetList);

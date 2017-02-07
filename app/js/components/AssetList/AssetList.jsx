import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AssetSearchForm from './AssetSearchForm';

class AssetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: [],
      onSelectAsset: props.onSelectAsset,
    };
  }

  render() {
    return (
      <div id='asset_list'>
        <h1>Asset List</h1>
        <AssetSearchForm />
        <ul>
          {
            this.state.assets.map(asset =>
              (
                <li key={ asset.dynamic_asset_data_id }>
                  <a href='/' onClick={ (event) => { this.state.onSelectAsset(event, asset); } }>
                    { asset.symbol }
                  </a>
                </li>
              ),
            )
          }
        </ul>
      </div>
    );
  }
}

AssetList.propTypes = {
  onSelectAsset: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  assets: state.items,
});

export default connect(mapStateToProps)(AssetList);

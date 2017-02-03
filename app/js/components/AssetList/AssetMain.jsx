import React, { Component } from 'react';
import AssetList from './AssetList';
import AssetDetail from './AssetDetail';

export default class AssetMain extends Component {
  constructor() {
    super();
    this.state = {
      asset: {},
    };
    this.onSelectAsset = this.onSelectAsset.bind(this);
  }

  onSelectAsset(event, asset) {
    this.setState({
      asset,
    });
    event.preventDefault();
  }

  render() {
    const assetMainStyle = {
      position: 'absolute',
    };

    const leftPanel = {
      position: 'relative',
      float: 'left',
      marginLeft: '50px',
    };

    const rightPanel = {
      position: 'relative',
      float: 'left',
      marginLeft: '100px',
    };

    return (
      <div id='asset_main' style={ assetMainStyle }>
        <div style={ leftPanel }>
          <AssetList onSelectAsset={ this.onSelectAsset } />
        </div>
        <div style={ rightPanel }>
          <AssetDetail asset={ this.state.asset } />
        </div>
      </div>
    );
  }
}

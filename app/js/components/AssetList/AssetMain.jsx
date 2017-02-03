import React, { Component } from 'react';
import AssetList from './AssetList';
import Asset from './Asset';

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

    const selectedAsset = {
      width: '800px',
    };

    return (
      <div id='asset_main' style={ assetMainStyle }>
        <div style={ leftPanel }>
          <AssetList onSelectAsset={ this.onSelectAsset } />
        </div>
        <div style={ rightPanel }>
          <div id='asset_detail' style={ selectedAsset }>
            {Object.prototype.hasOwnProperty.call(this.state.asset, 'symbol') &&
              <Asset
                id={ this.state.asset.id }
                symbol={ this.state.asset.symbol }
                description={ this.state.asset.options.description }
              />
            }
          </div>
        </div>
      </div>
    );
  }
}

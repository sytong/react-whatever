import React, { Component } from 'react';
import AssetList from './AssetList';
import Asset from './Asset';

require('./asset.scss');

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
    return (
      <div className='asset'>
        <div className='left-panel'>
          <AssetList onSelectAsset={ this.onSelectAsset } />
        </div>
        <div className='right-panel'>
          <div className='selected-asset'>
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

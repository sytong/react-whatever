import React, { Component } from 'react';
import AssetList from './AssetList';
import AssetDetail from './AssetDetail';

export default class AssetMain extends Component {
  constructor() {
    super();
    this.state = {
      asset: {}
    };
    this.onSelectAsset = this.onSelectAsset.bind(this);
  }

  onSelectAsset(event, asset) {
    this.setState({
      asset: asset
    });
    event.preventDefault();
  }

  render() {
    const asset_main_style = {
      position: 'absolute'
    };

    const left_panel = {
      position: 'relative',
      float: 'left',
      marginLeft: '50px'
    };

    const right_panel = {
      position: 'relative',
      float: 'left',
      marginLeft: '100px'
    };

    return (
      <div id="asset_main" style={asset_main_style}>
        <div style={left_panel}>
          <AssetList onSelectAsset={this.onSelectAsset}/>
        </div>
        <div style={right_panel}>
          <AssetDetail asset={this.state.asset}/>
        </div>
      </div>
    )
  }
}

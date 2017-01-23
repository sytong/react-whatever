import React, { Component } from 'react';
import AssetList from './AssetList';
import AssetDetail from './AssetDetail';

export default class AssetMain extends Component {

  onSelectAsset(event) {
    console.log(event.target);
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
          <AssetList onSelectAsset={(event) => this.onSelectAsset(event)}/>
        </div>
        <div style={right_panel}>
          <AssetDetail />
        </div>
      </div>
    )
  }
}

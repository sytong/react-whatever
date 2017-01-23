import React, { Component } from 'react';
import {Apis} from 'graphenejs-ws';

export default class AssetDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: {
        id: 'ID',
        name: 'NAME',
        dynamic_asset_data_id: 'DYNAMIC ASSET DATA ID',
        bitasset_data_id: 'BITASSET_DATA_ID',
        description: "THIS IS A TEST"
      }
    }
  }

  render() {
    return {
      <div id="asset_detail">
        <h1>{this.state.asset.name}<h1>
        <span>{this.state.asset.description}</span>
      </div>
    }
  }
}

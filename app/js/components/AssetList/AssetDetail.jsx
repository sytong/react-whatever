import React, { Component } from 'react';
import {Apis} from 'graphenejs-ws';
import Asset from './Asset';

export default class AssetDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    const asset = nextProps.asset;
    this.setState({
      asset: {
        id: asset.id,
        dynamic_asset_data_id: asset.dynamic_asset_data_id,
        symbol: asset.symbol,
        description: asset.options.description
      }
    })
  }

  render() {
    const styles = {
      width: '800px'
    }

    return (
      <div id="asset_detail" style={styles}>
        <Asset data={this.state.asset} />
      </div>
    )
  }
}

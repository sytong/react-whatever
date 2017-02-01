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
    const description = asset.options == undefined ? '' : asset.options.description;
    this.setState({
      asset: {
        id: asset.id,
        dynamic_asset_data_id: asset.dynamic_asset_data_id,
        symbol: asset.symbol,
        description: description
      }
    })
  }

  render() {
    const styles = {
      width: '800px'
    }

    return (
      <div id="asset_detail" style={styles}>
        {this.state.asset.hasOwnProperty('symbol') &&
            <Asset data={this.state.asset} />
        }
      </div>
    )
  }
}

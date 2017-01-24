import React, { Component } from 'react';
import {Apis} from 'graphenejs-ws';

export default class AssetDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: {
        name: '',
        description: ''
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const asset = nextProps.asset;
    this.setState({
      asset: {
        name: asset.symbol,
        description: asset.options.description
      }
    })
  }

  render() {
    const styles = {
      width: '500px'
    }

    return (
      <div id="asset_detail" style={styles}>
        <h1>{this.state.asset.name}</h1>
        <span>{this.state.asset.description}</span>
      </div>
    )
  }
}

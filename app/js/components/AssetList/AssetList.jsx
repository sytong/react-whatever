import React, { Component } from 'react';
import {Apis} from 'graphenejs-ws';

export default class AssetList extends Component {
  constructor(prop) {
    super();
    this.state = {
      assets: []
    }
  }

  componentWillMount() {
    this._loadAssets("A", 100);
  }

  _loadAssets(start, count) {
    Apis.instance().db_api().exec("list_assets", [start, count])
      .then(assets => {
        assets.forEach(asset => {
          console.log(asset);
          let updated = this.state.assets.concat([asset]); //immutable!!
          this.setState({
            assets: updated
          });
        })
      });
  }

  render() {
    return (
      <div className='asset_list'>
        <h1>Asset List</h1>
        <ul>
          {
            this.state.assets.map((asset, i) => {
              return <li>{asset.symbol}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

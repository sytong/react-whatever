import React, { Component } from 'react';
import {Apis} from 'graphenejs-ws';
import AssetDetail from './AssetDetail';

export default class AssetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: [],
      searchText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
    this._loadAssets("A", 100);
  }

  _loadAssets(start, count) {
    Apis.instance().db_api().exec("list_assets", [start, count])
      .then(assets => {
        this.state.assets = []; //have to clear the collection first
        assets.forEach(asset => {
          console.log(asset);
          let updated = this.state.assets.concat([asset]); //immutable!!
          this.setState({
            assets: updated
          });
        })
      });
  }

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }

  handleKeyPress(event) {
    if (event.key == 'Enter') {
      this._loadAssets(this.state.searchText, 100);
    }
  }

  handleSearch(event) {
    this._loadAssets(this.state.searchText, 100);
  }

  render() {
    const styles = {
      position: 'relative',
      float: 'left'
    }

    return (
      <div>
        <div id='asset_list' style={styles}>
          <h1>Asset List</h1>
          <input type="text" value={this.state.searchText} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
          <button type="button" onClick={this.handleSearch}>Search</button>
          <ul>
            {
              this.state.assets.map((asset) => {
                return <li key={asset.dynamic_asset_data_id}>{asset.symbol}</li>;
              })
            }
          </ul>
        </div>
        <div id='asset_detail'>
          <AssetDetail />
        </div>
      </div>
    );
  }
}

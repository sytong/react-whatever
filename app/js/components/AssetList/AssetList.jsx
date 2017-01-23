import React, { Component } from 'react';
import {Apis} from 'graphenejs-ws';

export default class AssetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: [],
      searchText: '',
      onSelectAsset: props.onSelectAsset
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
    return (
      <div id='asset_list'>
        <h1>Asset List</h1>
        <input type="text" value={this.state.searchText} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        <button type="button" onClick={this.handleSearch}>Search</button>
        <ul>
          {
            this.state.assets.map((asset) => {
              return (
                <li key={asset.dynamic_asset_data_id}>
                  <a href="#" onClick={this.state.onSelectAsset}>{asset.symbol}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

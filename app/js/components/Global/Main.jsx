import React, { Component } from 'react';
import {Apis} from 'graphenejs-ws';

export default class Main extends Component {
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
    Apis.instance("wss://bitshares.openledger.info/ws", true).init_promise.then((res) => {
      console.log("Connected to: ", res[0]);
      Apis.instance().db_api().exec("set_subscribe_callback", [this.updateListener, true]);
      Apis.instance().db_api().exec("list_assets", [start, count])
        .then(assets => {
          assets.forEach(asset => {
            console.log(asset)
          })
        })
    });
  }

  updateListener(object) {
    console.log("set_subscribe_callback:\n", object);
  }

/*
Apis.instance().db_api().exec("list_assets", [start, count])
  .then(assets => {
    assets.forEach(asset => {
      console.log(asset)
    })
  })
*/


  render() {
    return (
      <div className='Main'>
        Main Page
      </div>
    );
  }
}

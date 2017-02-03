import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createHashHistory';
import { Apis } from 'graphenejs-ws';
import AssetMain from './components/AssetList/AssetMain';
import Config from 'Config';

const history = createBrowserHistory({ queryKey: false });

export default class Main extends Component {
  render() {
    return this.props.children;
  }
}

const updateListener = (object) => {
  console.log('set_subscribe_callback:\n', object);
};

const initializer = (nextState, replaceState, callback) => {
  Apis.instance(Config.ws_connection_string, true).init_promise.then((res) => {
    console.log("Connected to: ", res[0]);
    Apis.instance().db_api().exec('set_subscribe_callback', [updateListener, true]);
    return callback();
  });
};

const routes = (
  <Route path='/' component={ Main } onEnter={ initializer }>
    <IndexRoute component={ AssetMain } />
  </Route>
);

ReactDOM.render(<Router history={ history } routes={ routes } />, document.getElementById('app'));

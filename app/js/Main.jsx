import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, Redirect} from "react-router";
import createBrowserHistory from "history/lib/createHashHistory";
import {Apis} from 'graphenejs-ws';
import AssetList from './components/AssetList/AssetList';

let history = createBrowserHistory({ queryKey: false });

export default class Main extends Component {
  render() {
    let content = <div className="my-content">{this.props.children}</div>
    return (
      <div id='content-wrapper'>
        {content}
      </div>
    );
  }
}

let updateListener = function(object) {
  console.log("set_subscribe_callback:\n", object);
}

let initializer = (nextState, replaceState, callback) => {
  Apis.instance("wss://bitshares.openledger.info/ws", true).init_promise.then((res) => {
    console.log("Connected to: ", res[0]);
    Apis.instance().db_api().exec("set_subscribe_callback", [updateListener, true]);
    return callback();
  });
}

let routes = (
  <Route path="/" component={Main} onEnter={initializer}>
    <IndexRoute component={AssetList}/>
  </Route>
)

ReactDOM.render(<Router history={history} routes={routes}/>, document.getElementById("app"));

# Graphene Asset Explorer
Search and display information of the assets from [OpenLedger](https://bitshares.openledger.info/) using the [Graphene Websocket library](https://www.npmjs.com/package/graphenejs-ws).

# How to run
* git clone this repo
* At repo root, `touch config.json`
* Enter the following in `config.json` (or replace this default url with your own):
```
  {
    "ws_connection_string": "wss://bitshares.openledger.info/ws"
  }
```
* `npm run dev`
* Open Chrome and go to `http:\\localhost:8080`

# Notes
* Using [react-router](https://react-router.now.sh/)
  * The connection to the graphene websocket is established in the `onEnter` hook.
* Only functional components are used.
* `Asset` and `AssetList` are connected to the Redux store and they managed their own state-to-props mapping. `AssetMain` has become a purely presentational component that hosts both `Asset` and `AssetList`. This may not be a good design though.
* Configured [this plugin](https://babeljs.io/docs/plugins/transform-object-rest-spread/) for babel.

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
* `npm run dev-start`
* Open Chrome and go to `http:\\localhost:8080`

# Notes
* Using [react-router](https://react-router.now.sh/)
  * The connection to the graphene websocket is established in the `onEnter` hook.
* The click handler on an Asset is passed from `AssetMain` to `AssetList` as a prop.
* `Asset` is a functional component that only handles presentation logic.

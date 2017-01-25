# Graphene Asset Explorer
Search and display information of the assets from [OpenLedger](https://bitshares.openledger.info/) using the [Graphene Websocket library](https://www.npmjs.com/package/graphenejs-ws).

# Notes
* Using [react-router](https://react-router.now.sh/)
  * The connection to the graphene websocket is established in the `onEnter` hook.
* The click handler on an Asset is passed from `AssetMain` to `AssetList` as a prop.
* `Asset` is a functional component that only handles presentation logic.

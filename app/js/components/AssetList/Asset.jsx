import React from 'react';

function renderAsset(data) {
  // I can't find a better method yet
  let rendered = [<tr><td colSpan="2">{data.description}</td></tr>];
  try {
    let obj = JSON.parse(data.description);
    const cell_styles = {
      verticalAlign: 'initial',
      padding: '5px'
    }
    rendered = Object.keys(obj).map((key) => {
      return (
        <tr>
          <td style={cell_styles}>{key}</td>
          <td style={cell_styles}>{obj[key]}</td>
        </tr>
      );
    });
  }
  catch (e) {
    // I got nothing to do here
  }
  return rendered;
}

module.exports = function Asset(props) {
  const data = props.data;
  return (
    <div>
      <div>
        <h1>{data.symbol}</h1>
        <h4>openledger: <a target="_blank" href={`https://bitshares.openledger.info/#/asset/${data.symbol}`}>info</a>&nbsp;
        <a target="_blank" href={`https://bitshares.openledger.info/#/market/${data.symbol}`}>market</a></h4>
      </div>
      <table>
        <tbody>
          {
            renderAsset(data).map((r) => { return r })
          }
        </tbody>
      </table>
    </div>
  )
}

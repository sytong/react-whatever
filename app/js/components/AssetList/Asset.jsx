import React from 'react';

function renderAsset(data) {
  // I can't find a better method yet
  let rendered = [<tr key={ `${data.id}` }><td key={ `${data.id}_desc` } colSpan='2'>{ data.description }</td></tr>];
  try {
    const obj = JSON.parse(data.description);
    const cellStyles = {
      verticalAlign: 'initial',
      padding: '5px',
    };
    rendered = Object.keys(obj).map((key, i) => {
      return (
        <tr key={ `${data.id}_${i}` }>
          <td key={ `${data.id}_${key}` } style={ cellStyles }>{key}</td>
          <td key={ `${data.id}_${key}_value` }style={ cellStyles }>{obj[key]}</td>
        </tr>
      );
    });
  } catch (e) {
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
        <h4>openledger:
          <a rel='noopener noreferrer' target='_blank' href={ `https://bitshares.openledger.info/#/asset/${data.symbol}` }>info</a>&nbsp;
          <a rel='noopener noreferrer' target='_blank' href={ `https://bitshares.openledger.info/#/market/${data.symbol}` }>market</a></h4>
      </div>
      <table>
        <tbody>
          {
            renderAsset(data)
          }
        </tbody>
      </table>
    </div>
  );
};

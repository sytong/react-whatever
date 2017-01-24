import React from 'react';

function renderAsset(data) {
  // I can't find a better method yet
  let rendered = [<tr><td colspan="2">{data.description}</td></tr>];
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
  console.log('Asset', props);
  return (
    <div>
      <h1>{props.data.symbol}</h1>
      <table>
        {
          renderAsset(props.data).map((r) => { return r })
        }
      </table>
    </div>
  )
}

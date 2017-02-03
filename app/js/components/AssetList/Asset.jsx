import React, { PropTypes } from 'react';

function renderAsset(id, symbol, description) {
  // I can't find a better method yet
  let rendered = [<tr key={ `${id}` }><td key={ `${id}_desc` } colSpan='2'>{ description }</td></tr>];
  try {
    const obj = JSON.parse(description);
    const cellStyles = {
      verticalAlign: 'initial',
      padding: '5px',
    };
    rendered = Object.keys(obj).map((key, i) => {
      return (
        <tr key={ `${id}_${i}` }>
          <td key={ `${id}_${key}` } style={ cellStyles }>{key}</td>
          <td key={ `${id}_${key}_value` }style={ cellStyles }>{obj[key]}</td>
        </tr>
      );
    });
  } catch (e) {
    // I got nothing to do here
  }
  return rendered;
}

const Asset = ({ id, symbol, description }) => (
  <div>
    <div>
      <h1>{ symbol }</h1>
      <h4>openledger:
        <a
          rel='noopener noreferrer'
          target='_blank'
          href={ `https://bitshares.openledger.info/#/asset/${symbol}` }
        >
          info
        </a>
        &nbsp;
        <a
          rel='noopener noreferrer'
          target='_blank'
          href={ `https://bitshares.openledger.info/#/market/${symbol}` }
        >
          market
        </a>
      </h4>
    </div>
    <table>
      <tbody>{ renderAsset(id, symbol, description) }</tbody>
    </table>
  </div>
);

Asset.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  description: PropTypes.object,
};

Asset.defaultProps = {
  description: {},
};

export default Asset;

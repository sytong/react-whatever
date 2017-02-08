import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

require('./asset.scss');

function renderAsset(id, symbol, description) {
  // I can't find a better method yet
  let rendered = [<tr key={ `${id}` }><td key={ `${id}_desc` } colSpan='2'>{ description }</td></tr>];
  try {
    const obj = JSON.parse(description);
    rendered = Object.keys(obj).map(key =>
      (
        <tr key={ `${id}_${key}` }>
          <td key={ `${id}_${key}_name` } className='cell'>{key}</td>
          <td key={ `${id}_${key}_value` } className='cell'>{obj[key]}</td>
        </tr>
      ),
    );
  } catch (e) {
    // I got nothing to do here
  }
  return rendered;
}

const Asset = ({ id, symbol, description }) => (
  <div>
    <div>
      <h1>{ symbol }</h1>
      { symbol !== '' &&
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
      }
    </div>
    <div className='attributes'>
      <table>
        <tbody>{ renderAsset(id, symbol, description) }</tbody>
      </table>
    </div>
  </div>
);

Asset.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Asset.defaultProps = {
  description: '',
};

const mapStateToProps = (state) => {
  const { selectedAsset } = state;
  return {
    id: selectedAsset.id,
    symbol: selectedAsset.symbol,
    description: selectedAsset.description,
  };
};


export default connect(mapStateToProps)(Asset);

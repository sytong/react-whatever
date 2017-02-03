import React from 'react';
import Asset from './Asset';

const AssetDetail = ({ asset }) => {
  const styles = {
    width: '800px',
  };

  return (
    <div id='asset_detail' style={ styles }>
      {Object.prototype.hasOwnProperty.call(asset, 'symbol') &&
        <Asset
          id={ asset.id }
          symbol={ asset.symbol }
          description={ asset.options.description }
        />
      }
    </div>
  );
};

export default AssetDetail;

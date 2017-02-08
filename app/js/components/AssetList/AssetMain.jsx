import React from 'react';
import AssetList from './AssetList';
import Asset from './Asset';

require('./asset.scss');

const AssetMain = () => (
  <div className='asset'>
    <div className='left-panel'>
      <AssetList />
    </div>
    <div className='right-panel'>
      <div className='selected-asset'>
        <Asset />
      </div>
    </div>
  </div>
);

export default AssetMain;

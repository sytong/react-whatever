import React from 'react';
import AssetList from './AssetList';
import Asset from './Asset';
import AssetSearchForm from './AssetSearchForm';

require('./asset.scss');

const AssetMain = () => (
  <div className='asset'>
    <div className='left-panel'>
      <h1>Asset List</h1>
      <AssetSearchForm />
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

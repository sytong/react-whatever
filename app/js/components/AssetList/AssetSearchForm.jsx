import React from 'react';
import { connect } from 'react-redux';
import { searchAssets } from '../../actions';


const handleKeyPress = (event, dispatch, text) => {
  if (event.key === 'Enter') {
    dispatch(searchAssets(text, 100));
  }
};

const handleSearch = (dispatch, text) => {
  dispatch(searchAssets(text, 100));
};

const AssetSearchForm = ({ dispatch }) => {
  let searchText;

  return (
    <div>
      <input
        type='text'
        ref={ (node) => { searchText = node; } }
        onKeyPress={ (event) => { handleKeyPress(event, dispatch, searchText.value); } }
      />
      <button
        type='button'
        onClick={ () => handleSearch(dispatch, searchText.value) }
      >
        Search
      </button>
    </div>
  );
};

export default connect()(AssetSearchForm);

/* eslint-disable */
import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
function SearchPage() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('Recipes');

  function handleQueryInput(e) {
    setQuery(e.target.value);
  }

  function handleTypeInput(e) {
    setType(e.target.value);
  }

  function submitSearch() {

  }
  return (
    <div>
      <h1>Search Page</h1>
      <input type="text" value={query} onChange={(e) => handleQueryInput(e)} />
      <input type="radio" id="html" name="search_type" value="Recipes" defaultChecked onChange={(e) => handleTypeInput(e)} />
      Recipes
      <input type="radio" id="html" name="search_type" value="Ingredients" onChange={(e) => handleTypeInput(e)} />
      Ingredients
      <br />
      <button type="submit" onClick={submitSearch}>Search</button>

      <br />
      {query}
      <br />
      {type}
    </div>
  );
}

export default SearchPage;

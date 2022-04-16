import { React, useState } from 'react';
import RecipeSearchResult from './RecipeSearchResult';
import IngredientSearchResult from './IngredientSearchResult';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('Recipes');
  const [resultsLength, setResultsLength] = useState('10');
  const [results, setResults] = useState(null);

  function handleQueryInput(e) {
    setQuery(e.target.value);
  }

  function handleTypeInput(e) {
    setType(e.target.value);
  }

  function handleResultsLength(e) {
    setResultsLength(e.target.value);
  }

  function submitSearch() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, type, length: resultsLength }),
    };
    fetch('/search', requestOptions)
      .then((response) => response.json())
      .then((data) => { setResults(data); })
      .catch((error) => { console.error('Error:', error); }); // eslint-disable-line no-console
  }

  function handleResults() {
    if (results !== null) {
      if (results !== 'apierror') {
        if (results.length !== 0) {
          if (results[0].title) {
            return results.map(
              (result) => (
                <RecipeSearchResult
                  key={result.id}
                  id={result.id}
                  image={result.image}
                  title={result.title}
                />
              ),
            );
          }
          return results.map(
            (result) => (
              <IngredientSearchResult
                key={result.id}
                id={result.id}
                image={result.image}
                name={result.name}
              />
            ),
          );
        }
        return 'No Search Results Found';
      }
      return 'Something went wrong with API Request!';
    }
    return '';
  }

  return (
    <div>
      <input type="text" value={query} onChange={(e) => handleQueryInput(e)} data-testid="input-field" />
      <input type="radio" id="html" name="search_type" value="Recipes" defaultChecked onChange={(e) => handleTypeInput(e)} />
      Recipes
      <input type="radio" id="html" name="search_type" value="Ingredients" onChange={(e) => handleTypeInput(e)} />
      Ingredients
      <br />
      <br />

      Number of Results:
      <select name="results-length" onChange={(e) => handleResultsLength(e)} defaultValue="10">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>

      &nbsp;&nbsp;&nbsp;
      <button type="submit" onClick={submitSearch}>Search</button>
      <br />
      <br />
      {handleResults()}
    </div>
  );
}

export default SearchPage;

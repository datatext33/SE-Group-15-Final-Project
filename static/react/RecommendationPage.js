import { React, useState } from 'react';
import RecipePanel from './RecipePanel';

function RecommendationPage() {
  const [cuisine, setCuisine] = useState('Chinese');
  const [dishType, setDishType] = useState('main course');
  const [recipeDataList, setRecipeDataList] = useState([]);

  // handle for cuisine change from input box
  const handleCuisineChange = (e) => {
    setCuisine(e.target.value);
  };

  // handle for dishType change from input box
  const handleDishTypeChange = (e) => {
    setDishType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault('');
    fetch('/recommendation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // eslint-disable-next-line quote-props
      body: JSON.stringify({ 'cuisine': cuisine, 'dish_type': dishType }),
    })
      .then((response) => response.json())
      .then((response) => {
        setRecipeDataList([...response]);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Cuisine
        <select id="cuisines" onChange={(e) => handleCuisineChange(e)} data-testid="cuisines">
          <option value="Chinese">Chinese</option>
          <option value="American">American</option>
          <option value="Japanese">Japanese</option>
          <option value="Spanish">Spanish</option>
        </select>

        Dish Type
        <select id="dish_types" onChange={(e) => handleDishTypeChange(e)} data-testid="dish_types">
          <option value="main course">main course</option>
          <option value="breakfast">breakfast</option>
          <option value="appetizer">appetizer</option>
        </select>
        <input type="submit" value="Get Recommendation" />
      </form>
      {
        recipeDataList.map((recipeData, idx) => (
          <div key={idx}>
            <RecipePanel title={recipeData.title} imgAddress={recipeData.image} />
          </div>
        ))
      }
    </div>

  );
}

export default RecommendationPage;

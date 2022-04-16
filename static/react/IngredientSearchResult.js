import { React } from 'react';
import PropTypes from 'prop-types';

function IngredientSearchResult(
  {
    id, image, name,
  },
) {
  return (
    <div>
      <a href={`ingredient/${id}`}>
        <p>{name}</p>
        <img
          src={`https://spoonacular.com/cdn/ingredients_250x250/${image}`}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          alt={name}
        />
      </a>
    </div>
  );
}

IngredientSearchResult.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default IngredientSearchResult;

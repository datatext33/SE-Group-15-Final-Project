import { React } from 'react';
import PropTypes from 'prop-types';

function RecipeSearchResult(
  {
    id, image, title,
  },
) {
  return (
    <div>
      <a href={`recipe/${id}`}>
        <p>{title}</p>
        <img
          src={image}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          alt={title}
        />
      </a>
    </div>
  );
}
RecipeSearchResult.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RecipeSearchResult;

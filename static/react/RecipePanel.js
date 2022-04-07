/* eslint-disable react/jsx-indent */
import { React } from 'react';
import PropTypes from 'prop-types';
import './RecipePanel.css';

function RecipePanel(
  { title, imgAddress },
) {
  return (
  <div className="Panel">
    <img className="Scaled" src={imgAddress} alt="recipeImg" />
    <span>{title}</span>
  </div>
  );
}

RecipePanel.propTypes = {
  title: PropTypes.string.isRequired,
  imgAddress: PropTypes.string.isRequired,
};

export default RecipePanel;

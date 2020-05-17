// @flow
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

const Dish = props => {
  const { strMeal, strMealThumb, idMeal } = props;
  const { url } = useRouteMatch();

  return (
    <div className="dish">
      <Link to={`${url}/${idMeal}`}><h2>{strMeal}</h2></Link>
      <img src={strMealThumb} alt={strMeal} />
    </div>
  );
};
Dish.defaultProps = {
  strMeal: '',
  strMealThumb: '',
  idMeal: '',
};
Dish.propTypes = {
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
  idMeal: PropTypes.string,
};

export { Dish };

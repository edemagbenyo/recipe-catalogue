// @flow
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

const Dish = ({ dish }) => {
  const { strMeal, strMealThumb, idMeal } = dish;
  const { url } = useRouteMatch();

  return (
    <div className="dish">
      <Link to={`${url}/${idMeal}`}>
        <h2>{strMeal}</h2>
      </Link>
      <img src={strMealThumb} alt={strMeal} />
    </div>
  );
};
Dish.defaultProps = {
  dish: {
    strMeal: '',
    strMealThumb: '',
    idMeal: '',
  },
};
Dish.propTypes = {
  dish: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    idMeal: PropTypes.string,
  }),
};

export { Dish };

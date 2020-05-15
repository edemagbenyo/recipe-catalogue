// @flow
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export const Dish = (props) => {
  const { strMeal, strMealThumb, idMeal } = props;
  const { url } = useRouteMatch();

  return (
    <div>
      <Link to={`${url}/${idMeal}`}><h2>{strMeal}</h2></Link>
      <img src={strMealThumb} alt={strMeal} />
    </div>
  );
};

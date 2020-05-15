import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({
  strCategory,
  strCategoryDescription,
  strCategoryThumb,
}) => (
  <div>
    <Link to={`/${strCategory}`}><h1>{strCategory}</h1></Link>
    <p>{strCategoryDescription}</p>
    <img alt={strCategory} src={strCategoryThumb} />
  </div>
);

export default Category;

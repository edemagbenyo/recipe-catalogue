import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/categories.scss';
const Category = ({
  strCategory,
  strCategoryDescription,
  strCategoryThumb,
}) => (
  <section className="category">
    <Link to={`/${strCategory}`}><h1>{strCategory}</h1></Link>
    <img alt={strCategory} src={strCategoryThumb} />
    <p>{strCategoryDescription}</p>
  </section>
);

export default Category;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/categories.scss';
import PropTypes from 'prop-types';

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

Category.defaultProps = {
  strCategory: '',
  strCategoryDescription: '',
  strCategoryThumb: '',
};
Category.propTypes = {
  strCategory: PropTypes.string,
  strCategoryDescription: PropTypes.string,
  strCategoryThumb: PropTypes.string,
};

export default Category;

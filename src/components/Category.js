import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/categories.scss';

const Category = ({
  cat,
}) => {
  const {
    strCategory,
    strCategoryDescription,
    strCategoryThumb,
  } = cat;
  return (
    <section className="category">
      <Link to={`/${strCategory}`}><h1>{strCategory}</h1></Link>
      <img data-testid="image" alt={strCategory} src={strCategoryThumb} />
      <p>{strCategoryDescription}</p>
    </section>
  );
};

Category.defaultProps = {
  cat: {
    strCategory: '',
    strCategoryDescription: '',
    strCategoryThumb: '',
  },
};
Category.propTypes = {
  cat: PropTypes.shape({
    strCategory: PropTypes.string,
    strCategoryDescription: PropTypes.string,
    strCategoryThumb: PropTypes.string,
  }),
};

export default Category;

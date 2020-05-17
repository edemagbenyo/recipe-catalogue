import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCategories } from '../actions/categories';
import Category from '../components/Category';
import '../styles/home.scss';

const CategoriesList = props => {
  const {
    categories, fetchCategories, dishes, ingredient, isSearching,
  } = props;
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories, dishes]);

  return (
    <div className="categoriesList">
      {isSearching ? (
        <Redirect push to={{ pathname: `/search/${ingredient}` }} />
      ) : (
        <div className="categories">

          {categories.length === 0 ? (
            <div>Loading...</div>
          ) : (
            categories.map(cat => <Category key={cat.idCategory} cat={cat} />)
          )}
        </div>
      )}
    </div>
  );
};

CategoriesList.defaultProps = {
  categories: '',
  dishes: '',
  ingredient: '',
  fetchCategories: () => undefined,
  isSearching: false,
};
CategoriesList.propTypes = {
  categories: PropTypes.string,
  dishes: PropTypes.string,
  ingredient: PropTypes.string,
  fetchCategories: PropTypes.func,
  isSearching: PropTypes.bool,
};

const mapDispathToProps = dispatch => ({
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
});

const mapStateToProps = state => ({
  categories: state.categories,
  dishes: state.dishes.dishes,
  ingredient: state.searched.ingredient,
  isSearching: state.dishes.isSearching,
});

export default connect(mapStateToProps, mapDispathToProps)(CategoriesList);

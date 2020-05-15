import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchCategories } from '../actions/categories';
import Category from '../components/Category';
import '../styles/home.scss';

const CategoriesList = (props) => {
  const {
    categories, fetchCategories, dishes, ingredient,
  } = props;
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories, dishes]);

  return (
    <div>
      {dishes.length > 0 ? (
        <Redirect push to={{ pathname: `/search/${ingredient}` }} />
      ) : (
        <div>

          {categories.length === 0 ? (
            <div>Loading...</div>
          ) : (
            categories.map((cat) => <Category key={cat.idCategory} {...cat} />)
          )}
        </div>
      )}
    </div>
  );
};

const mapDispathToProps = (dispatch) => ({
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
});

const mapStateToProps = (state) => ({
  categories: state.categories,
  dishes: state.searched.dishes,
  ingredient: state.searched.ingredient,
});

export default connect(mapStateToProps, mapDispathToProps)(CategoriesList);

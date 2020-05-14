import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/categories";
import Category from "../components/Category";

const CategoriesList = (props) => {
  const { categories, fetchCategories } = props;
  useEffect(() => {
    fetchCategories();
  },[fetchCategories]);
  return (
    <div>
      {(categories.length===0) ? <div>Loading...</div> : categories.map(cat=><Category key={cat.idCategory} {...cat}/>) }
    </div>
  );
};

const mapDispathToProps = (dispatch) => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories());
    },
  };
};

const mapStateToProps = (state) => {
  return{
    categories: state.categories,
  }
};

export default connect(mapStateToProps, mapDispathToProps)(CategoriesList);

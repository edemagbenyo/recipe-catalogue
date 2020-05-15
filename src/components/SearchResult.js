// @flow
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SearchResult = (props) => {
  const { dishes } = props;
  return (
    <div>
      {dishes.length === 0 ? (
        <div>No Dish found</div>
      ) : (
        <ul>
          {dishes.map(({idMeal,strMeal}) => (
            <li key={idMeal}>{strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
SearchResult.defaultProps = {
  dishes: [],
};

SearchResult.propTypes = {
  dishes: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    dishes: state.searched.dishes,
  };
};

export default connect(mapStateToProps, null)(SearchResult);

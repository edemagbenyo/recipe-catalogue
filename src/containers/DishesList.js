import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchDishes } from '../actions/dishes';
import { Dish } from '../components/Dish';
import '../styles/dishes.scss';
import { Loading } from '../components/Loading';

const DishesList = props => {
  const { categoryId } = useParams();
  const { fetchDishes, dishes, isFetching } = props;
  useEffect(() => {
    if (categoryId) {
      fetchDishes(categoryId);
    }
  }, [fetchDishes, categoryId]);
  return (
    <div className="dishesList">
      {isFetching ? (
        <Loading />
      ) : (
        dishes.length === 0 ? (<div className="notfound"><p>No dish found!</p></div>)
          : dishes.map(dish => <Dish key={dish.idMeal} dish={dish} />)
      )}
    </div>
  );
};

DishesList.defaultProps = {
  dishes: [],
  isFetching: false,
  fetchDishes: () => undefined,
};
DishesList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      strCategory: PropTypes.string,
    }),
  ),
  fetchDishes: PropTypes.func,
  isFetching: PropTypes.bool,
};
const mapDispatchToProps = dispatch => ({
  fetchDishes: category => dispatch(fetchDishes(category)),
});
const mapStateToProps = state => ({
  dishes: state.dishes.dishes,
  isFetching: state.dishes.isFetching,
});
export default connect(mapStateToProps, mapDispatchToProps)(DishesList);

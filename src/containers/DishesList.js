import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDishes } from '../actions/dishes';
import { Dish } from '../components/Dish';
import '../styles/dishes.scss'

const DishesList = (props) => {
  const { categoryId } = useParams();
  const { fetchDishes, dishes } = props;
  useEffect(() => {
    fetchDishes(categoryId);
  }, [fetchDishes, categoryId]);
  return (
    <div className="dishesList">
      {(dishes.length === 0) ? <div>Loading...</div> : dishes.map((dish) => <Dish key={dish.idMeal} {...dish} />)}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchDishes: (category) => dispatch(fetchDishes(category)),
});
const mapStateToProps = (state) => {
  console.log(state);
  return{
    dishes: state.dishes.dishes,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DishesList);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDish } from "../actions/dish";
import { useParams } from "react-router-dom";

const Dish = (props) => {
  const { dishId } = useParams();
  const { fetchDish, dish } = props;
  console.log("dish",dish);
  useEffect(() => {
    fetchDish(dishId);
  }, [fetchDish, dishId]);
  const {strMeal, strInstructions, strMealThumb}= dish
  return <div>
    <h1>{strMeal}</h1>
    <img src={strMealThumb} alt={strMeal}/>
    <p>Instructions</p>
    <p>{strInstructions}</p>
    <p>Ingredients</p>
    <ul>
      
    </ul>
    

  </div>;
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDish: (dishId) => dispatch(fetchDish(dishId)),
  };
};
const mapStateToProps = (state)=>{
  return {
    dish: state.dish
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dish);

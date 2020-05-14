import * as React from 'react';
import { fetchDishes } from '../actions';
import { connect } from 'react-redux';

const RecipesList = () => {
  return (
    <div>
      
    </div>
  );
};


const mapDispathToProps = (dispatch)=>({
  fetchDishes : (category)=>{
    dispatch(fetchDishes(category))
  }
})


export default connect(mapDispathToProps,null)(RecipesList);
import React from 'react';


 const IngredientSearch = (props) => {
   const {onChangeIngredient, ingredient, submitIngredient}= props
  return (
    <div>
      <form onSubmit={submitIngredient}>
        <label>
          Filter by Ingredients
          <input name="ingredientInput" onChange={onChangeIngredient} value={ingredient} />
        </label>
      </form>
    </div>
  );
};

export default IngredientSearch;
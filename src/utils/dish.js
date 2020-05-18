export const getIngredients = meal => {
  const ingredientArray = [];

  Object.keys(meal).forEach(item => {
    if (item.startsWith('strIngredient')) {
      const ingredientId = item.slice(13);
      // console.log(meal,item)
      if (meal[item] && meal[item].length > 0)ingredientArray.push(`${meal[item]} - ${meal[`strMeasure${ingredientId}`]}`);
    }
  });
  return ingredientArray;
};

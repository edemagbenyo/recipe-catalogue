import { getIngredients } from '../utils/dish';


describe('meal util functions', () => {
  it('returns the list of ingredients in array', () => {
    const meal = {
      strIngredient1: 'Poivre',
      strIngredient2: 'Sel',
      strMeasure1: '1kg',
      strMeasure2: 'pinch',
    };

    expect(getIngredients(meal)).toStrictEqual(['Poivre - 1kg', 'Sel - pinch']);
  });
});

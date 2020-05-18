import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Category from '../components/Category';

afterEach(cleanup);
it('renders a category ', () => {
  const category = {
    strCategory: 'meal',
    strCategoryDescription: 'best meal',
    strCategoryThumb: 'image.png',
  };
  const { getByText, getByTestId } = render(<Category cat={category} />, { wrapper: MemoryRouter });

  expect(getByText('meal')).toBeVisible();
  expect(getByText('best meal')).toBeVisible();
  expect(getByTestId('image')).toHaveAttribute('src', expect.stringContaining('image.png'));
});

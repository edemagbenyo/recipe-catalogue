import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Category from '../components/Category';
import { Router, MemoryRouter } from 'react-router-dom';

it('renders a category ',()=>{
  const category={
    strCategory:'meal',
    strCategoryDescription:'best meal',
    strCategoryThumb:'image.png',
  }
  const {getByText, getByRole} = render(<Category cat={category}/>, {wrapper:MemoryRouter});

  expect(getByText('meal')).toBeVisible()
  expect(getByText('best meal')).toBeVisible()
  expect(getByRole('image')).toHaveAttribute('src', expect.stringContaining('image.png'))
})
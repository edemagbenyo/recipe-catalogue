import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Category from '../components/Category';

afterEach(cleanup);
describe('It test the category component', () => {
  const category = {
    strCategory: 'meal',
    strCategoryDescription: 'best meal',
    strCategoryThumb: 'image.png',
  };

  it('renders a category ', () => {
    const { getByText } = render(<Category cat={category} />, {
      wrapper: MemoryRouter,
    });
    expect(getByText('meal')).toBeVisible();
  });
  it('renders a category with a description ', () => {
    const { getByText } = render(<Category cat={category} />, {
      wrapper: MemoryRouter,
    });
    expect(getByText('best meal')).toBeVisible();
  });
  it('renders a category with an image ', () => {
    const { getByTestId } = render(<Category cat={category} />, {
      wrapper: MemoryRouter,
    });
    expect(getByTestId('image')).toHaveAttribute(
      'src',
      expect.stringContaining('image.png'),
    );
  });
});

import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Footer from '../components/Footer';


afterEach(cleanup);
it("renders",()=>{
  const {asFragment} = render(<Footer/>)
  expect(asFragment()).toMatchSnapshot()
});

it("containers delicias in p tag",()=>{
  const { getByText} = render(<Footer/>)
  expect(getByText('Delicias © 2020')).toBeVisible()
});
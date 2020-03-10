import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {

  it('should render the app title', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Image Finder/i);
    expect(linkElement).toBeInTheDocument();
  });

});

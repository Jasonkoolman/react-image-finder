import { render } from '@testing-library/react';
import React from 'react';
import DynamicImage from './DynamicImage';

describe('DynamicImage component', () => {

  it('should contain the class "dynamic-image"', () => {
    const { container } = render(<DynamicImage src="test.jpg"/>);
    expect(container.firstChild).toHaveClass('dynamic-image');
  });

  it('should have the correct alt attribute', () => {
    const { container } = render(<DynamicImage src="test.jpg" alt="Test"/>);
    const img = container.firstChild.querySelector('img');
    expect(img).toHaveAttribute('alt', 'Test');
  });

});

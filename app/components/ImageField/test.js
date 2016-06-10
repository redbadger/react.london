import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-testutils-additions';

import ImageField from './ImageField';

describe('ImageField', () => {
  it('renders the input element', () => {
    const mockField = { touched: false, error: "hi" };
    const imageField = TestUtils.renderIntoDocument(<ImageField field={mockField} />);
    const input = TestUtils.find(imageField, 'input');
    expect(input.length).to.equal(1);
  });

  it('renders the correct speaker as a label', () => {
    const mockField = { label: 'Marcel', touched: false };
    const imageField = TestUtils.renderIntoDocument(
      <ImageField field={mockField} />
    );
    const label = TestUtils.findRenderedDOMComponentWithClass(imageField, 'speaker');
    expect(label.textContent).to.equal('Marcel');
  });
});

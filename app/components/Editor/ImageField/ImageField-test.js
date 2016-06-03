import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import TestUtils from 'react-testutils-additions';

import ImageField from './ImageField';

describe('ImageField', () => {
  it('renders the input element', () => {
    const mockField = { touched: false, error: false };
    const imageField = TestUtils.renderIntoDocument(<ImageField field={mockField} />);
    const input = TestUtils.find(imageField, 'input');
    expect(input.length).to.equal(1);
  });

  it('renders the correct speaker as a label', () => {
    const mockField = { touched: false, error: false };
    const mockLabel = 'Marcel';
    const imageField = TestUtils.renderIntoDocument(
      <ImageField
        field={mockField}
        label={mockLabel} />
    );
    const label = TestUtils.findRenderedDOMComponentWithClass(imageField, 'speaker');
    expect(label.textContent).to.equal('Marcel');
  });
});

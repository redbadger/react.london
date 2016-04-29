import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Preview from './Preview.js';

const exampleUserTexts = [{ id: 1, value: 'hello' }];

describe('Preview view', function () {
  it('contains a span with className special', function () {
    let renderedComponent = shallow(<Preview userTexts={exampleUserTexts} />);
    expect(renderedComponent.find('.Preview__heading--special')).to.have.length(1);
  });

  it('renders user texts correctly', function () {
    let renderedComponent = shallow(<Preview userTexts={exampleUserTexts} />);
    let userText = renderedComponent.find('.userText').text();
    expect(userText).to.equal('User said: hello');
  });
});

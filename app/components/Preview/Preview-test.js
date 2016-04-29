import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Preview from './Preview.js';

const exampleUserTexts = [{id: 1, value:"hello"}];

describe('Preview view', function () {
  it('contains a span with className special', function () {
    let renderedComponent = shallow(<Preview userTexts={exampleUserTexts} />)
    expect(renderedComponent.contains(<span className="special">React</span>)).to.equal(true);
  });
});

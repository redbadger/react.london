import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import App from './App.js';

describe('A suite', function () {
  it('contains a span with className special', function () {
    expect(shallow(<App />).contains(<span className="special">React</span>)).to.equal(true);
  });
});

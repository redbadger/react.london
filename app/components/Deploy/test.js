import { expect } from 'chai';
import React from 'react';
import Deploy from './Deploy.js';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';

describe.only('Deploy button', () => {

  const content = { title: 'my awesome title' }

  let deployStub = sinon.spy();

  afterEach(() => {
    deployStub.reset();
  });

  describe('for staging', () => {

    const wrapper = shallow(
      <Deploy environment="staging" content={content} deployContent={deployStub} />
    );

    it('Renders a button labeled staging', () => {
      const button = wrapper.find('button')
      expect(button).to.have.length(1);
      expect(button.text()).to.contain("staging");
    });

    it('calls deployContent with /staging with content when clicked', () => {
      wrapper.find('button').simulate('click');

      expect(deployStub.calledOnce).to.be.true;
      expect(deployStub.lastCall.args).to.eql([
        'staging',
        { title: 'my awesome title' }
      ]);
    });

  })

  describe('for live', () => {

    const wrapper = shallow(
      <Deploy environment="live" content={content} deployContent={deployStub} />
    );

    it('Renders a button labeled live', () => {
      const button = wrapper.find('button')
      expect(button).to.have.length(1);
      expect(button.text()).to.contain("live");
    });

    it('calls deployContent with /live with content when clicked', () => {
      wrapper.find('button').simulate('click');

      expect(deployStub.calledOnce).to.be.true;
      expect(deployStub.lastCall.args).to.eql([
        'live',
        { title: 'my awesome title' }
      ]);
    });

  })

});

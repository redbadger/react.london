import { expect } from 'chai';
import { callDeploy, watchDeploy } from '.';
import { deployContent } from '../api/';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

describe('Deploy Sagas', () => {

  const payload = {
    type: 'DEPLOY_CONTENT',
    environment: 'staging',
    content: { title: 'my awesome title' },
  }

  const watchDeploySaga = watchDeploy(payload);
  const callDeploySaga = callDeploy(payload);

  it('listens for DEPLOY_CONTENT, then calls deployContent', () => {
    expect(watchDeploySaga.next().value.name)
        .to.equal(
          'takeLatest(DEPLOY_CONTENT, callDeploy)'
        );    
  })

  it('calls deployContent with environment and content', () => {
    expect(callDeploySaga.next().value)
        .to.eql(
          call(deployContent, payload.environment, payload.content)
        );
  });

});
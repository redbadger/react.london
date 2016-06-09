import { expect } from 'chai';
import { deployToStaging } from '.';
import { call, put } from 'redux-saga/effects';
import fetch from 'whatwg-fetch';

describe.only('Deploy Sagas', () => {

  const deployToStagingSaga = deployToStaging();

  it('POSTs to /staging with stringified content', () => {
    const expectedReducer = {
      type: 'DEPLOY_CONTENT',
      environment: 'staging',
      content: { title: 'my awesome title' },
    }
    console.log(deployToStagingSaga.next());

    expect(deployToStagingSaga.next().value)
        .to.eql(
          call(fetch)
        );
  });

});
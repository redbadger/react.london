import { expect } from 'chai';
import { deployToStaging } from '.';
import { call, put } from 'redux-saga/effects';

describe.only('Deploy Sagas', () => {

  const deployToStagingSaga = deployToStaging();

  it('POSTs to /staging with stringified content', () => {
    const expectedReducer = {
      type: 'DEPLOY_CONTENT',
      environment: 'staging',
      content: { title: 'my awesome title' },
    }

    expect(deployToStagingSaga.next().value)
        .to.eql(
          call(Fetch)
        );
  });

});
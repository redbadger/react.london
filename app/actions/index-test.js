import { expect } from 'chai';
import * as actions from '.';

describe('Deploy Actions', () => {

  it('calls DEPLOY_CONTENT with the desired environment and content', () => {
    const environment = 'staging';
    const content = { title: 'my awesome title' };

    const expectedReducer = {
      type: 'DEPLOY_CONTENT',
      environment,
      content,
    }
    expect(actions.requestDeployment(environment, content)).to.deep.equal(expectedReducer);
  });

});
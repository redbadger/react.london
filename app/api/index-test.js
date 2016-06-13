import { expect } from 'chai';
import fetch from 'whatwg-fetch';
import { deployContent } from '.';
import fetchMock from 'fetch-mock';

describe('deployContent', () => {

  const environment = 'staging';
  const content = { title: 'my awesome title' };
  
  beforeEach(() => {
    fetchMock.mock({
      matcher: '/staging',
      response: 200,
      greed: 'good'
    })
  });

  it('POSTs to /staging with stringified content and the correct headers', () => {
    deployContent(environment, content);

    expect(fetchMock.called('/staging')).to.be.true;
    const stagingCall = fetchMock.lastOptions('/staging');

    expect(stagingCall.method).to.eq('POST');
    expect(stagingCall.mode).to.eq('cors');

    expect(
      stagingCall.headers
    ).to.deep.equal(
      {'Content-Type': 'application/json'}
    );

    expect(
      stagingCall.body
    ).to.deep.equal(
      '{"title":"my awesome title"}'
    )

  })
})

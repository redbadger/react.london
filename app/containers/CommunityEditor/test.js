import { mapStateToProps } from '.';

describe('CommunityEditor container mapStateToProps', () => {
  it('gets the form values if they exist', () => {
    const state = {
      form: {
        community: {
          values: {
            communityProp1: 'abc',
            communityProp2: 'def',
          },
        },
      },
      community: {
        hello: 'world',
      },
    };
    expect(mapStateToProps(state)).to.deep.equal({
      communityProps: { communityProp1: 'abc', communityProp2: 'def' },
      initialFormValues: { hello: 'world' },
    });
  });

  it('defaults when no form data', () => {
    const state = {
      form: {
      },
      community: {
        hello: 'world',
      },
    };
    expect(mapStateToProps(state)).to.deep.equal({
      communityProps: {},
      initialFormValues: { hello: 'world' },
    });
  });
});

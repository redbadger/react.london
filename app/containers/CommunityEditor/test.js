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
    };
    expect(mapStateToProps(state)).to.deep.equal({
      community: {
        communityProp1: 'abc',
        communityProp2: 'def',
      },
    });
  });

  it('defaults when no form data', () => {
    const state = {
      form: {
      },
    };
    expect(mapStateToProps(state)).to.deep.equal({
      community: {},
    });
  });
});

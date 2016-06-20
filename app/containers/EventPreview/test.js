import { mapStateToProps } from '.';

describe('EventPreview container mapStateToProps', () => {
  it('merges community and event form objects', () => {
    const state = {
      community: {
        communityProp1: 'abc',
        communityProp2: 'def',
      },
      form: {
        event: {
          values: {
            eventProp1: '123',
            eventProp2: '456',
          },
        },
      },
    };
    expect(mapStateToProps(state)).to.deep.equal({
      communityProp1: 'abc',
      communityProp2: 'def',
      eventProp1: '123',
      eventProp2: '456',
    });
  });

  it('handles empty form data', () => {
    const state = {
      community: {
        communityProp1: 'abc',
        communityProp2: 'def',
      },
      form: {},
    };
    expect(mapStateToProps(state)).to.deep.equal({
      communityProp1: 'abc',
      communityProp2: 'def',
    });
  });
});

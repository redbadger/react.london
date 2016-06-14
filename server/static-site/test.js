import { compilePage } from '.';

const previewData = {
  about: {
    title: 'React London!',
    summary: 'Lorem <b>ipsum</b> dolor sit amet.',
  },
  meetup: {
    details: 'Some details',
    speakers: [
      {
        speaker: 'Mr DevOps',
        title: 'Getting Ship Done',
      },
    ],
  },
};

describe('compilePage', () => {
  it('renders the Preview page', () => {
    const html = compilePage('Preview', previewData);
    expect(html).to.include('<!doctype html>');
    expect(html).to.include(previewData.about.title);
    expect(html).to.include(previewData.about.summary);
    expect(html).to.include('Getting Ship Done');
  });

  it('explodes for an unknown page', () => {
    expect(
      () => compilePage('AngularMeetup', {})
    ).to.throw(Error);
  });
});

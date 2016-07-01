import {
  compileSite,
} from '.';

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

describe('compileSite', () => {
  it('renders pages', () => {
    const site = compileSite(previewData);
    const paths = site.map(e => e.path).sort();
    expect(paths).to.deep.equal([
      'index.html',
      'main.css',
    ]);
  });
});

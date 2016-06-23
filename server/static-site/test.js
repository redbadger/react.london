import {
  compileSite,
  compilePreview,
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
    ]);
  });
});

describe('compilePreview', () => {
  it('renders the Preview page', () => {
    const { path, body } = compilePreview(previewData);
    expect(path).to.equal('index.html');
    expect(body).to.include('<!doctype html>');
    expect(body).to.include(previewData.about.title);
    expect(body).to.include(previewData.about.summary);
    expect(body).to.include('Getting Ship Done');
  });
});

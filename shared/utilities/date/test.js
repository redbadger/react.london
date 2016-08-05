import { formatDate, isAfter, isBefore } from './';

describe('formatDate', () => {
  const testDate = new Date('2016-07-26T19:30:00+01:00');

  it('formats an object with an iso string prop', () => {
    expect(formatDate({ iso: '2016-07-25T23:01:00+0000' }))
      .to.equal('00:01');
  });

  it('formats an object with an iso Date prop', () => {
    expect(formatDate({ iso: new Date('2016-07-25T23:02:00+0000') }))
      .to.equal('00:02');
  });

  it('formats a String date', () => {
    expect(formatDate('2016-07-25T23:00:00+0000'))
      .to.equal('00:00');
  });

  it('formats a Date date', () => {
    expect(formatDate(testDate)).to.equal('19:30');
  });

  it('allows format to be overidden', () => {
    expect(formatDate(testDate, 'DD/MM/YY'))
      .to.equal('26/07/16');
  });

  it('returns undefined when no date passed in', () => {
    expect(formatDate()).to.equal(undefined);
  });
});

describe('isBefore', () => {
  const isoBefore = '2016-07-26T19:30:00+01:00';
  const isoAfter = '2016-07-26T19:30:00+01:01';

  it('can detect the earlier of iso strings', () => {
    expect(isBefore(isoAfter, isoBefore)).to.equal(true);
    expect(isBefore(isoBefore, isoAfter)).to.equal(false);
  });

  it('can detect the earlier of Date objects', () => {
    expect(isBefore(new Date(isoAfter), new Date(isoBefore))).to.equal(true);
    expect(isBefore(new Date(isoBefore), new Date(isoAfter))).to.equal(false);
  });

  it('can detect the earlier of { iso: "" } objects', () => {
    expect(isBefore({ iso: isoAfter }, { iso: isoBefore })).to.equal(true);
    expect(isBefore({ iso: isoBefore }, { iso: isoAfter })).to.equal(false);
  });
});

describe('isAfter', () => {
  const isoBefore = '2016-07-26T19:30:00+01:00';
  const isoAfter = '2016-07-26T19:30:00+01:01';

  it('can detect the later of iso strings', () => {
    expect(isAfter(isoAfter, isoBefore)).to.equal(false);
    expect(isAfter(isoBefore, isoAfter)).to.equal(true);
  });

  it('can detect the later of Date objects', () => {
    expect(isAfter(new Date(isoAfter), new Date(isoBefore))).to.equal(false);
    expect(isAfter(new Date(isoBefore), new Date(isoAfter))).to.equal(true);
  });

  it('can detect the earlier of { iso: "" } objects', () => {
    expect(isAfter({ iso: isoAfter }, { iso: isoBefore })).to.equal(false);
    expect(isAfter({ iso: isoBefore }, { iso: isoAfter })).to.equal(true);
  });
});

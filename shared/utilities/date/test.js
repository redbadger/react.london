import { formatDate } from './';

// TODO: Test the other functions in this module

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

import { googleMapsUrl } from '.';

describe('googleMapsUrl', () => {
  it('defaults to null if no longitude', () => {
    const result = googleMapsUrl({ coordinates: { latitude: 1 } });
    expect(result).to.equal(null);
  });

  it('defaults to null if no latitude', () => {
    const result = googleMapsUrl({ coordinates: { longitude: 1 } });
    expect(result).to.equal(null);
  });

  it('builds a URL', () => {
    const result = googleMapsUrl({
      coordinates: { latitude: 2, longitude: 1 },
    });
    expect(result).to.equal('http://www.google.com/maps/place/2,1');
  });
});

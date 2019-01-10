import { createUniqueID, getNumfrom65to90 } from '../utils/index';

describe('createUniqueId', () => {
  describe('getNumfrom65to90', () => {
    it('returns a number between 65 and 90', () => {
      expect(getNumfrom65to90()).toBeLessThan(91);
      expect(getNumfrom65to90()).toBeGreaterThan(64);
    });
  });
  it('returns string of only letters and nums', () => {
    expect(/[^a-z\d]/gi.test(createUniqueID())).toEqual(false);
    expect(typeof createUniqueID()).toBe('string');
  });
});

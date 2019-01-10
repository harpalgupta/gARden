import { createID, getNumfrom65to90 } from '../utils/index';

describe('createID', () => {
  describe('getNumfrom65to90', () => {
    it('returns a number between 65 and 90', () => {
      expect(getNumfrom65to90()).toBeLessThan(91);
      expect(getNumfrom65to90()).toBeGreaterThan(64);
    });
  });
  describe('checkIDUniqueness', () => {
    it('', () => {});
  });
  it('returns string of only letters and nums', () => {
    expect(/[^a-z\d]/gi.test(createID())).toEqual(false);
    expect(typeof createID()).toBe('string');
  });
  it('returns id with length 6', () => {
    expect(createID().length).toBeLessThanOrEqual(6);
  });
});

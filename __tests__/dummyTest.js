import { createUniqueID } from '../utils/index';

describe('createUniqueId', () => {
  it('returns string of only letters and nums', () => {
    expect(/[^a-z\d]/gi.test(createUniqueID())).toEqual(false);
    expect(typeof createUniqueID()).toBe('string');
  });
});

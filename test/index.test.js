import { expect } from 'chai';
import Main from '../src/index.js';

describe('Main', () => {
    it('should be a class', () => {
	expect(new Main()).to.not.equal(undefined);
    });
});

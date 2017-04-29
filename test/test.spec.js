const chai = require('chai');
const expect = chai.expect;

describe('A test suite', () => {
  beforeEach(() => {});
  afterEach(() => {});
  it('should be 12', () => expect(12).to.equal(12));
  it('should be 13', function() {expect(13).to.equal(13)});
  it('should pass', () => expect(true).to.be.true);
});

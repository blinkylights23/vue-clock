import chai from 'chai';
import Vue from 'vue';
import Clock from '../src/Clock.vue';

const expect = chai.expect;

describe('Clock', () => {
  beforeEach(() => {});
  afterEach(() => {});
  it('should be able to determine a locale', () => {
    let locale = Clock.methods.getLocale();
    expect(locale).to.be.a('string');
  });
  it('should be 13', () => expect(13).to.equal(13));
  it('should pass', () => expect(true).to.be.true);
});

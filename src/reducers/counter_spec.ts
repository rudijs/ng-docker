import counter from './counter';

describe('Reducers', () => {
  describe('counter', () => {
    it('should return default value 0', () => {
      counter().should.equal(0);
    });

    it('should increment', () => {
      counter(0, { type: 'INCREMENT_COUNTER' }).should.equal(1);
    });

    it('should decrement', () => {
      counter(3, { type: 'DECREMENT_COUNTER' }).should.equal(2);
    });
  });
});

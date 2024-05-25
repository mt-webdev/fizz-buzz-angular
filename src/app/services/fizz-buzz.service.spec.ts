import {
  FizzBuzzResult,
  FizzBuzzResults,
  FizzBuzzService,
} from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  const service = new FizzBuzzService();

  describe('None', () => {
    it('should print value for number 1', () => {
      const value = 1;
      const expected: FizzBuzzResult = 1;
      expect(service.check(value)).toBe(expected);
    });

    it('should print value for number 11', () => {
      const value = 11;
      const expected: FizzBuzzResult = 11;
      expect(service.check(value)).toBe(expected);
    });

    it('should print value for number 88', () => {
      const value = 88;
      const expected: FizzBuzzResult = 88;
      expect(service.check(value)).toBe(expected);
    });
  });

  describe('Fizz', () => {
    it('should print Fizz for number 3', () => {
      const value = 3;
      const expected: FizzBuzzResult = FizzBuzzResults.Fizz;
      expect(service.check(value)).toBe(expected);
    });

    it('should print Fizz for number 9', () => {
      const value = 9;
      const expected: FizzBuzzResult = FizzBuzzResults.Fizz;
      expect(service.check(value)).toBe(expected);
    });
  });

  describe('Buzz', () => {
    it('should print Buzz for number 5', () => {
      const value = 5;
      const expected: FizzBuzzResult = FizzBuzzResults.Buzz;
      expect(service.check(value)).toBe(expected);
    });

    it('should print Buzz for number 10', () => {
      const value = 10;
      const expected: FizzBuzzResult = FizzBuzzResults.Buzz;
      expect(service.check(value)).toBe(expected);
    });
  });

  describe('FizzBuzz', () => {
    it('should print FizzBuzz for number 15', () => {
      const value = 15;
      const expected: FizzBuzzResult = FizzBuzzResults.FizzBuzz;
      expect(service.check(value)).toBe(expected);
    });

    it('should print FizzBuzz for number 30', () => {
      const value = 30;
      const expected: FizzBuzzResult = FizzBuzzResults.FizzBuzz;
      expect(service.check(value)).toBe(expected);
    });
  });
});

import { Injectable } from '@angular/core';

export const FizzBuzzResults = {
  Fizz: 'Fizz',
  Buzz: 'Buzz',
  FizzBuzz: 'FizzBuzz',
} as const;

export type FizzBuzzResult = keyof typeof FizzBuzzResults | number;

@Injectable()
export class FizzBuzzService {
  private isFizz(value: number): boolean {
    return value % 3 === 0;
  }

  private isBuzz(value: number): boolean {
    return value % 5 === 0;
  }

  private isFizzBuzz(value: number): boolean {
    return this.isFizz(value) && this.isBuzz(value);
  }

  check(value: number): FizzBuzzResult {
    if (this.isFizzBuzz(value)) {
      return FizzBuzzResults.FizzBuzz;
    }

    if (this.isFizz(value)) {
      return FizzBuzzResults.Fizz;
    }

    if (this.isBuzz(value)) {
      return FizzBuzzResults.Buzz;
    }

    return value;
  }
}

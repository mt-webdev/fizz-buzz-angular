import { Injectable } from '@angular/core';

export const FizzBuzzResults = {
  none: 'none',
  fizz: 'fizz',
  buzz: 'buzz',
  fizzbuzz: 'fizzbuzz',
} as const;

export type FizzBuzzResult = keyof typeof FizzBuzzResults;

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
      return FizzBuzzResults.fizzbuzz;
    }

    if (this.isFizz(value)) {
      return FizzBuzzResults.fizz;
    }

    if (this.isBuzz(value)) {
      return FizzBuzzResults.buzz;
    }

    return FizzBuzzResults.none;
  }
}

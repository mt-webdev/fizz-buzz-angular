import { Pipe, PipeTransform } from '@angular/core';
import { FizzBuzzResult, FizzBuzzResults } from '../services/fizz-buzz.service';

@Pipe({
  standalone: true,
  name: 'fizzBuzzColors',
})
export class FizzBuzzColorsPipe implements PipeTransform {
  transform(value: FizzBuzzResult): string {
    if (value === FizzBuzzResults.Fizz) {
      return 'bg-green-600 text-white';
    }

    if (value === FizzBuzzResults.Buzz) {
      return 'bg-orange-600 text-white';
    }

    if (value === FizzBuzzResults.FizzBuzz) {
      return 'bg-red-600 text-white';
    }

    return '';
  }
}

import { Injectable, inject } from '@angular/core';
import { Subject, filter, interval, map, takeUntil } from 'rxjs';
import { FizzBuzzService } from './fizz-buzz.service';

@Injectable({ providedIn: 'root' })
export class FizzBuzzGameService {
  private fizzBuzzService = inject(FizzBuzzService);

  private intercept$ = new Subject<void>();
  game$ = interval(500).pipe(
    takeUntil(this.intercept$),
    filter((_, index) => index < 100),
    map((value) => {
      return this.fizzBuzzService.check(value + 1);
    })
  );

  intercept(): void {
    this.intercept$.next();
  }
}

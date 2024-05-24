import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { FizzBuzzColorsPipe } from './pipes/fizz-buzz.pipe';
import { FizzBuzzGameService } from './services/fizz-buzz-game.service';
import { FizzBuzzResult, FizzBuzzService } from './services/fizz-buzz.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, FizzBuzzColorsPipe],
  providers: [FizzBuzzService, FizzBuzzGameService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private gameService = inject(FizzBuzzGameService);
  private formBuilder = inject(FormBuilder);

  private destroy = new Subject<void>();

  formGroup = this.formBuilder.group({
    input: ['', [Validators.required, Validators.pattern('stop')]],
  });

  values: FizzBuzzResult[] = [];

  ngOnInit(): void {
    this.gameService.game$
      .pipe(takeUntil(this.destroy))
      .subscribe((value) => this.values.push(value));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  intercept() {
    this.gameService.intercept();
  }
}

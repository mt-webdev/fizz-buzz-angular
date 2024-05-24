import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FizzBuzzService } from './services/fizz-buzz.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  providers: [FizzBuzzService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.group({
    input: ['', [Validators.required, Validators.pattern('stop')]],
  });
}

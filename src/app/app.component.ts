import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FizzBuzzService } from './services/fizz-buzz.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [FizzBuzzService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

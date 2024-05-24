import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have initial empty array`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.values).toEqual([]);
  });

  it('should disable intercept button initially', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('button[type=submit]')?.getAttribute('disabled')
    ).toBe('');
    expect(app.formGroup.invalid).toBe(true);
  });

  it('should disable intercept button on invalid input', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.formGroup.controls.input.setValue('notstop');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('button[type=submit]')?.getAttribute('disabled')
    ).toBe('');
    expect(app.formGroup.invalid).toBe(true);
  });

  it('should enable intercept button once valid', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.formGroup.controls.input.setValue('stop');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('button[type=submit]')?.getAttribute('disabled')
    ).toBe(null);
    expect(app.formGroup.valid).toBe(true);
  });
});

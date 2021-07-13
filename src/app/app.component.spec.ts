import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    TestBed.createComponent(AppComponent);
    expect(window.getComputedStyle(<HTMLElement>document.getElementById('someId')).textAlign).toBe('center');
  });
});

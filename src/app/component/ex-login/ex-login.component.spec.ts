import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExLoginComponent } from './ex-login.component';

describe('ExLoginComponent', () => {
  let component: ExLoginComponent;
  let fixture: ComponentFixture<ExLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExLoginComponent]
    });
    fixture = TestBed.createComponent(ExLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

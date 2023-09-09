import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EXREGISTERComponent } from './ex-register.component';

describe('EXREGISTERComponent', () => {
  let component: EXREGISTERComponent;
  let fixture: ComponentFixture<EXREGISTERComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EXREGISTERComponent]
    });
    fixture = TestBed.createComponent(EXREGISTERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

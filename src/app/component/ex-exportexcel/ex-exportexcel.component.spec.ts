import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EXEXPORTEXCELComponent } from './ex-exportexcel.component';

describe('EXEXPORTEXCELComponent', () => {
  let component: EXEXPORTEXCELComponent;
  let fixture: ComponentFixture<EXEXPORTEXCELComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EXEXPORTEXCELComponent]
    });
    fixture = TestBed.createComponent(EXEXPORTEXCELComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

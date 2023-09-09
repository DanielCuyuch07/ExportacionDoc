import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExDepartamentosComponent } from './ex-departamentos.component';

describe('ExDepartamentosComponent', () => {
  let component: ExDepartamentosComponent;
  let fixture: ComponentFixture<ExDepartamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExDepartamentosComponent]
    });
    fixture = TestBed.createComponent(ExDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

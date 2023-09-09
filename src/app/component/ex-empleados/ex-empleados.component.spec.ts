import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExEmpleadosComponent } from './ex-empleados.component';

describe('ExEmpleadosComponent', () => {
  let component: ExEmpleadosComponent;
  let fixture: ComponentFixture<ExEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExEmpleadosComponent]
    });
    fixture = TestBed.createComponent(ExEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

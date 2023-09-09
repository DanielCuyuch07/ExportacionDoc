import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExProfesoresComponent } from './ex-profesores.component';

describe('ExProfesoresComponent', () => {
  let component: ExProfesoresComponent;
  let fixture: ComponentFixture<ExProfesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExProfesoresComponent]
    });
    fixture = TestBed.createComponent(ExProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

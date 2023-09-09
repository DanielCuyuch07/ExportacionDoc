import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExHorariosComponent } from './ex-horarios.component';

describe('ExHorariosComponent', () => {
  let component: ExHorariosComponent;
  let fixture: ComponentFixture<ExHorariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExHorariosComponent]
    });
    fixture = TestBed.createComponent(ExHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

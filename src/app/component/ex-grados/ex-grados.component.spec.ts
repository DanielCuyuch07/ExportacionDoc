import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExGradosComponent } from './ex-grados.component';

describe('ExGradosComponent', () => {
  let component: ExGradosComponent;
  let fixture: ComponentFixture<ExGradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExGradosComponent]
    });
    fixture = TestBed.createComponent(ExGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

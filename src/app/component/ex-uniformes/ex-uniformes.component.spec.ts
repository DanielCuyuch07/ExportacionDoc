import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExUniformesComponent } from './ex-uniformes.component';

describe('ExUniformesComponent', () => {
  let component: ExUniformesComponent;
  let fixture: ComponentFixture<ExUniformesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExUniformesComponent]
    });
    fixture = TestBed.createComponent(ExUniformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

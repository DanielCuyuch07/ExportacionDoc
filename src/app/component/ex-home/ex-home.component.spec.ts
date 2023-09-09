import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EXHOMEComponent } from './ex-home.component';

describe('EXHOMEComponent', () => {
  let component: EXHOMEComponent;
  let fixture: ComponentFixture<EXHOMEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EXHOMEComponent]
    });
    fixture = TestBed.createComponent(EXHOMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

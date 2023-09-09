import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EXEXPORTPDFComponent } from './ex-exportpdf.component';

describe('EXEXPORTPDFComponent', () => {
  let component: EXEXPORTPDFComponent;
  let fixture: ComponentFixture<EXEXPORTPDFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EXEXPORTPDFComponent]
    });
    fixture = TestBed.createComponent(EXEXPORTPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

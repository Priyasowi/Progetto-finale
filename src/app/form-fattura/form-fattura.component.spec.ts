import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFatturaComponent } from './form-fattura.component';

describe('FormFatturaComponent', () => {
  let component: FormFatturaComponent;
  let fixture: ComponentFixture<FormFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

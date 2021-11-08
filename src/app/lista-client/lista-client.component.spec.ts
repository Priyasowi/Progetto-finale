import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientComponent } from './lista-client.component';

describe('ListaClientComponent', () => {
  let component: ListaClientComponent;
  let fixture: ComponentFixture<ListaClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

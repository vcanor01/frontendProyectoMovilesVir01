import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilMarcaComponent } from './movil-marca.component';

describe('MovilMarcaComponent', () => {
  let component: MovilMarcaComponent;
  let fixture: ComponentFixture<MovilMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovilMarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovilMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

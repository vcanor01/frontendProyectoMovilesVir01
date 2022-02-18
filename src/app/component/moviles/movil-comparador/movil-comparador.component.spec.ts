import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilComparadorComponent } from './movil-comparador.component';

describe('MovilComparadorComponent', () => {
  let component: MovilComparadorComponent;
  let fixture: ComponentFixture<MovilComparadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovilComparadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovilComparadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

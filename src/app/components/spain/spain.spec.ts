import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPAIN } from './spain';

describe('SPAIN', () => {
  let component: SPAIN;
  let fixture: ComponentFixture<SPAIN>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SPAIN]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPAIN);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

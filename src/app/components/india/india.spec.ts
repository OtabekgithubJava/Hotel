import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INDIA } from './india';

describe('INDIA', () => {
  let component: INDIA;
  let fixture: ComponentFixture<INDIA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [INDIA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(INDIA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

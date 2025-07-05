import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SWE } from './swe';

describe('SWE', () => {
  let component: SWE;
  let fixture: ComponentFixture<SWE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SWE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SWE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

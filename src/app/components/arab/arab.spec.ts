import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARAB } from './arab';

describe('ARAB', () => {
  let component: ARAB;
  let fixture: ComponentFixture<ARAB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ARAB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ARAB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

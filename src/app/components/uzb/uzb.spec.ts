import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UZB } from './uzb';

describe('UZB', () => {
  let component: UZB;
  let fixture: ComponentFixture<UZB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UZB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UZB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

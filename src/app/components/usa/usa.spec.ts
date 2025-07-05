import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USA } from './usa';

describe('USA', () => {
  let component: USA;
  let fixture: ComponentFixture<USA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [USA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(USA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

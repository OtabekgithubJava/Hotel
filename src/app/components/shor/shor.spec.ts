import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shor } from './shor';

describe('Shor', () => {
  let component: Shor;
  let fixture: ComponentFixture<Shor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Shor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shortepa } from './shortepa';

describe('Shortepa', () => {
  let component: Shortepa;
  let fixture: ComponentFixture<Shortepa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Shortepa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shortepa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

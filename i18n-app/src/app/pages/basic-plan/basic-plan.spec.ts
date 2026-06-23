import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPlan } from './basic-plan';

describe('BasicPlan', () => {
  let component: BasicPlan;
  let fixture: ComponentFixture<BasicPlan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPlan],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicPlan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

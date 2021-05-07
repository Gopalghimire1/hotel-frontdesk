import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsummaryComponent } from './guestsummary.component';

describe('GuestsummaryComponent', () => {
  let component: GuestsummaryComponent;
  let fixture: ComponentFixture<GuestsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestsummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

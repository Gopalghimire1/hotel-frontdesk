import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglereservationComponent } from './singlereservation.component';

describe('SinglereservationComponent', () => {
  let component: SinglereservationComponent;
  let fixture: ComponentFixture<SinglereservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglereservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

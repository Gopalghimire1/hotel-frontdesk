import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllguestComponent } from './allguest.component';

describe('AllguestComponent', () => {
  let component: AllguestComponent;
  let fixture: ComponentFixture<AllguestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllguestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

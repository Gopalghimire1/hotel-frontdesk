import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleguestComponent } from './singleguest.component';

describe('SingleguestComponent', () => {
  let component: SingleguestComponent;
  let fixture: ComponentFixture<SingleguestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleguestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

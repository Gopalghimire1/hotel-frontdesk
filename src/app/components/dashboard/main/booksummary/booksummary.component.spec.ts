import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksummaryComponent } from './booksummary.component';

describe('BooksummaryComponent', () => {
  let component: BooksummaryComponent;
  let fixture: ComponentFixture<BooksummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextEventsPage } from './next-events.page';

describe('NextEventsPage', () => {
  let component: NextEventsPage;
  let fixture: ComponentFixture<NextEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

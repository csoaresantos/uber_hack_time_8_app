import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeDetailPage } from './relative-detail.page';

describe('RelativeDetailPage', () => {
  let component: RelativeDetailPage;
  let fixture: ComponentFixture<RelativeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

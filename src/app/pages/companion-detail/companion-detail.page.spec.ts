import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionDetailPage } from './companion-detail.page';

describe('CompanionDetailPage', () => {
  let component: CompanionDetailPage;
  let fixture: ComponentFixture<CompanionDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderlyDetailPage } from './elderly-detail.page';

describe('ElderlyDetailPage', () => {
  let component: ElderlyDetailPage;
  let fixture: ComponentFixture<ElderlyDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderlyDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderlyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

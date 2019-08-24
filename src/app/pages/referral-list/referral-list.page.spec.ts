import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralListPage } from './referral-list.page';

describe('ReferralListPage', () => {
  let component: ReferralListPage;
  let fixture: ComponentFixture<ReferralListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

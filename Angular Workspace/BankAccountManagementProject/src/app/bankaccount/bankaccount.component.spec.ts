import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankaccountComponent } from './bankaccount.component';

describe('BankaccountComponent', () => {
  let component: BankaccountComponent;
  let fixture: ComponentFixture<BankaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankaccountComponent]
    });
    fixture = TestBed.createComponent(BankaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

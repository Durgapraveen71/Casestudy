import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketpricesComponent } from './ticketprices.component';

describe('TicketpricesComponent', () => {
  let component: TicketpricesComponent;
  let fixture: ComponentFixture<TicketpricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketpricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketpricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

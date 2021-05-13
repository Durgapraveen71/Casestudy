import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularstationComponent } from './particularstation.component';

describe('ParticularstationComponent', () => {
  let component: ParticularstationComponent;
  let fixture: ComponentFixture<ParticularstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

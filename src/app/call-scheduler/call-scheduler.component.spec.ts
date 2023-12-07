import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallSchedulerComponent } from './call-scheduler.component';

describe('CallSchedulerComponent', () => {
  let component: CallSchedulerComponent;
  let fixture: ComponentFixture<CallSchedulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallSchedulerComponent]
    });
    fixture = TestBed.createComponent(CallSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

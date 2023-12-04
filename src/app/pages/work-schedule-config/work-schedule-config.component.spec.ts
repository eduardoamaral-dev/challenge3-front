import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkScheduleConfigComponent } from './work-schedule-config.component';

describe('WorkScheduleConfigComponent', () => {
  let component: WorkScheduleConfigComponent;
  let fixture: ComponentFixture<WorkScheduleConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkScheduleConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkScheduleConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

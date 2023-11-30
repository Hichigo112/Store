import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAddAttendanceComponent } from './block-add-attendance.component';

describe('BlockAddAttendanceComponent', () => {
  let component: BlockAddAttendanceComponent;
  let fixture: ComponentFixture<BlockAddAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockAddAttendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockAddAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockShowroomComponent } from './block-showroom.component';

describe('BlockShowroomComponent', () => {
  let component: BlockShowroomComponent;
  let fixture: ComponentFixture<BlockShowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockShowroomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

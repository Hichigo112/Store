import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockMaterialsComponent } from './block-materials.component';

describe('BlockMaterialsComponent', () => {
  let component: BlockMaterialsComponent;
  let fixture: ComponentFixture<BlockMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockMaterialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

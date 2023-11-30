import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStockComponent } from './block-stock.component';

describe('BlockStockComponent', () => {
  let component: BlockStockComponent;
  let fixture: ComponentFixture<BlockStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

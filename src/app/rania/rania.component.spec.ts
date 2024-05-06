import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaniaComponent } from './rania.component';

describe('RaniaComponent', () => {
  let component: RaniaComponent;
  let fixture: ComponentFixture<RaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaniaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

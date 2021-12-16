import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggingElementComponent } from './dragging-element.component';

describe('DraggingElementComponent', () => {
  let component: DraggingElementComponent;
  let fixture: ComponentFixture<DraggingElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggingElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

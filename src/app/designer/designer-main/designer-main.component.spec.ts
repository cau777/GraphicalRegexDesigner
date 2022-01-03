import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerMainComponent } from './designer-main.component';

describe('DesignerMainComponent', () => {
  let component: DesignerMainComponent;
  let fixture: ComponentFixture<DesignerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

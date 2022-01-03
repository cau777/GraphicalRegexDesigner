import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDisplayComponent } from './saved-display.component';

describe('SavedDisplayComponent', () => {
  let component: SavedDisplayComponent;
  let fixture: ComponentFixture<SavedDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

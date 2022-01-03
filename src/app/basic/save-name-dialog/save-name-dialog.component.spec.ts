import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveNameDialogComponent } from './save-name-dialog.component';

describe('SaveNameDialogComponent', () => {
  let component: SaveNameDialogComponent;
  let fixture: ComponentFixture<SaveNameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveNameDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

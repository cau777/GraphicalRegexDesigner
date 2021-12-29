import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInfoComponent } from './simple-info.component';

describe('SimpleInfoComponent', () => {
  let component: SimpleInfoComponent;
  let fixture: ComponentFixture<SimpleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

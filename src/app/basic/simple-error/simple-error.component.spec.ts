import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleErrorComponent } from './simple-error.component';

describe('SimpleErrorComponent', () => {
  let component: SimpleErrorComponent;
  let fixture: ComponentFixture<SimpleErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

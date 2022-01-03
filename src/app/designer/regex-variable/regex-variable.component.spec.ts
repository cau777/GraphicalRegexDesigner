import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexVariableComponent } from './regex-variable.component';

describe('RegexVariableComponent', () => {
  let component: RegexVariableComponent;
  let fixture: ComponentFixture<RegexVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

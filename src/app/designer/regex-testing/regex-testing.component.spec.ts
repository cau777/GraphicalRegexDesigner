import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexTestingComponent } from './regex-testing.component';

describe('RegexTestingComponent', () => {
  let component: RegexTestingComponent;
  let fixture: ComponentFixture<RegexTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

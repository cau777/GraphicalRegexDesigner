import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexBuilderComponent } from './regex-builder.component';

describe('RegexBuilderComponent', () => {
  let component: RegexBuilderComponent;
  let fixture: ComponentFixture<RegexBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

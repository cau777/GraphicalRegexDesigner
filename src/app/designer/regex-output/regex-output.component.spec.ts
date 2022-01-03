import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexOutputComponent } from './regex-output.component';

describe('RegexOutputComponent', () => {
  let component: RegexOutputComponent;
  let fixture: ComponentFixture<RegexOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

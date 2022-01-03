import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexTestingMatchesComponent } from './regex-testing-matches.component';

describe('RegexTestingMatchesComponent', () => {
  let component: RegexTestingMatchesComponent;
  let fixture: ComponentFixture<RegexTestingMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexTestingMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexTestingMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

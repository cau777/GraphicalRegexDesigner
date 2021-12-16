import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexTokenComponent } from './regex-token.component';

describe('RegexTokenComponent', () => {
  let component: RegexTokenComponent;
  let fixture: ComponentFixture<RegexTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

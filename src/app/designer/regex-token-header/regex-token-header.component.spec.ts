import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexTokenHeaderComponent } from './regex-token-header.component';

describe('RegexTokenHeaderComponent', () => {
  let component: RegexTokenHeaderComponent;
  let fixture: ComponentFixture<RegexTokenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexTokenHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexTokenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

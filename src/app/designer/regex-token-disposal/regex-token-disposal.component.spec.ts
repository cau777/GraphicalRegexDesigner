import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexTokenDisposalComponent } from './regex-token-disposal.component';

describe('RegexTokenDisposalComponent', () => {
  let component: RegexTokenDisposalComponent;
  let fixture: ComponentFixture<RegexTokenDisposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexTokenDisposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexTokenDisposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

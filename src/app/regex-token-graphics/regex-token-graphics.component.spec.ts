import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexTokenGraphicsComponent } from './regex-token-graphics.component';

describe('TokenGraphicsComponent', () => {
  let component: RegexTokenGraphicsComponent;
  let fixture: ComponentFixture<RegexTokenGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexTokenGraphicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexTokenGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

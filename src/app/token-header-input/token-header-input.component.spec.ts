import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenHeaderInputComponent } from './token-header-input.component';

describe('TokenHeaderInputComponent', () => {
  let component: TokenHeaderInputComponent;
  let fixture: ComponentFixture<TokenHeaderInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenHeaderInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenHeaderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

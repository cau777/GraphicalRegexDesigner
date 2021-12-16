import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenGraphicsComponent } from './token-graphics.component';

describe('TokenGraphicsComponent', () => {
  let component: TokenGraphicsComponent;
  let fixture: ComponentFixture<TokenGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenGraphicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

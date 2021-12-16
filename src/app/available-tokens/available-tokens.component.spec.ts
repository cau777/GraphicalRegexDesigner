import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTokensComponent } from './available-tokens.component';

describe('AvailableTokensComponent', () => {
  let component: AvailableTokensComponent;
  let fixture: ComponentFixture<AvailableTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableTokensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

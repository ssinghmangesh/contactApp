import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymemberComponent } from './displaymember.component';

describe('DisplaymemberComponent', () => {
  let component: DisplaymemberComponent;
  let fixture: ComponentFixture<DisplaymemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaymemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

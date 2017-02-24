import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItmeComponent } from './user-itme.component';

describe('UserItmeComponent', () => {
  let component: UserItmeComponent;
  let fixture: ComponentFixture<UserItmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserItmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

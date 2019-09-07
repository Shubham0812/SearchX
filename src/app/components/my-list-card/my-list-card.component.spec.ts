import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListCardComponent } from './my-list-card.component';

describe('MyListCardComponent', () => {
  let component: MyListCardComponent;
  let fixture: ComponentFixture<MyListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

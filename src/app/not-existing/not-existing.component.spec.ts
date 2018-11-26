import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotExistingComponent } from './not-existing.component';

describe('NotExistingComponent', () => {
  let component: NotExistingComponent;
  let fixture: ComponentFixture<NotExistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotExistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

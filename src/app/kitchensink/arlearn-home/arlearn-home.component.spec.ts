import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArlearnHomeComponent } from './arlearn-home.component';

describe('ArlearnHomeComponent', () => {
  let component: ArlearnHomeComponent;
  let fixture: ComponentFixture<ArlearnHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArlearnHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArlearnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

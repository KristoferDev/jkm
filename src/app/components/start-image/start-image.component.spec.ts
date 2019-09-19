import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartImageComponent } from './start-image.component';

describe('StartImageComponent', () => {
  let component: StartImageComponent;
  let fixture: ComponentFixture<StartImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

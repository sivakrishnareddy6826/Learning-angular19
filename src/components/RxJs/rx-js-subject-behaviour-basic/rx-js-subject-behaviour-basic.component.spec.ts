import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsSubjectBehaviourBasicComponent } from './rx-js-subject-behaviour-basic.component';

describe('RxJsSubjectBehaviourBasicComponent', () => {
  let component: RxJsSubjectBehaviourBasicComponent;
  let fixture: ComponentFixture<RxJsSubjectBehaviourBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsSubjectBehaviourBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsSubjectBehaviourBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

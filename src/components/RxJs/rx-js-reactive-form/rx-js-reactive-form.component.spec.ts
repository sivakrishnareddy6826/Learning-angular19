import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsReactiveFormComponent } from './rx-js-reactive-form.component';

describe('RxJsReactiveFormComponent', () => {
  let component: RxJsReactiveFormComponent;
  let fixture: ComponentFixture<RxJsReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

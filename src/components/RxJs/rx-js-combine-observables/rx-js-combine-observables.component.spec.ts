import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsCombineObservablesComponent } from './rx-js-combine-observables.component';

describe('RxJsCombineObservablesComponent', () => {
  let component: RxJsCombineObservablesComponent;
  let fixture: ComponentFixture<RxJsCombineObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsCombineObservablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsCombineObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

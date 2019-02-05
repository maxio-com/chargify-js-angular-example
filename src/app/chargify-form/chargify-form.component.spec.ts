import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargifyFormComponent } from './chargify-form.component';

describe('ChargifyFormComponent', () => {
  let component: ChargifyFormComponent;
  let fixture: ComponentFixture<ChargifyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargifyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

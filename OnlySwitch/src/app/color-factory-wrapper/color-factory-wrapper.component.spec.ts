import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFactoryWrapperComponent } from './color-factory-wrapper.component';

describe('ColorFactoryWrapperComponent', () => {
  let component: ColorFactoryWrapperComponent;
  let fixture: ComponentFixture<ColorFactoryWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorFactoryWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorFactoryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

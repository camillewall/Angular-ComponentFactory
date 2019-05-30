import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFactoryComponent } from './color-factory.component';

describe('ColorFactoryComponent', () => {
  let component: ColorFactoryComponent;
  let fixture: ComponentFixture<ColorFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

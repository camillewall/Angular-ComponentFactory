import { TestBed } from '@angular/core/testing';

import { MyColorsService } from './my-colors.service';

describe('MyColorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyColorsService = TestBed.get(MyColorsService);
    expect(service).toBeTruthy();
  });
});

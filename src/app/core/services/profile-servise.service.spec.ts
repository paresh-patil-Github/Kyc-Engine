import { TestBed } from '@angular/core/testing';

import { ProfileServiseService } from './profile-servise.service';

describe('ProfileServiseService', () => {
  let service: ProfileServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

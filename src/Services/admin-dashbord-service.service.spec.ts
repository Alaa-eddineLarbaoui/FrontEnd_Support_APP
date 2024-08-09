import { TestBed } from '@angular/core/testing';

import { AdminDashbordServiceService } from './admin-dashbord-service.service';

describe('AdminDashbordServiceService', () => {
  let service: AdminDashbordServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDashbordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

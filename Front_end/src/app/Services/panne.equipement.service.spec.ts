import { TestBed } from '@angular/core/testing';

import { PanneEquipementService } from './panne.equipement.service';

describe('PanneEquipementService', () => {
  let service: PanneEquipementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanneEquipementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

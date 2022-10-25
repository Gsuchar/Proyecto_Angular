import { TestBed } from '@angular/core/testing';

import { alumnosDataService } from './alumnosData.service';

describe('GestionDatosService', () => {
  let service: alumnosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(alumnosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

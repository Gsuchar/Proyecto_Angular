import { TestBed } from '@angular/core/testing';

import { GestionDatosService } from './gestion-datos.service';

describe('GestionDatosService', () => {
  let service: GestionDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

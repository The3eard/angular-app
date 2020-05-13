/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NbaService } from './nba.service';

describe('Service: Nba', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NbaService]
    });
  });

  it('should ...', inject([NbaService], (service: NbaService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimpleHttpService } from './simple-http.service';

describe('SimpleHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleHttpService]
    });
  });

  it('should ...', inject([SimpleHttpService], (service: SimpleHttpService) => {
    expect(service).toBeTruthy();
  }));
});

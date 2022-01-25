import { TestBed } from '@angular/core/testing';

import { MessagerieServiceService } from './messagerie-service.service';

describe('MessagerieServiceService', () => {
  let service: MessagerieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagerieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

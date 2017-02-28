import { TestBed, inject } from '@angular/core/testing';
import { WordingService } from './wording.service';

describe('WordingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordingService]
    });
  });

  it('should ...', inject([WordingService], (service: WordingService) => {
    expect(service).toBeTruthy();
  }));
});

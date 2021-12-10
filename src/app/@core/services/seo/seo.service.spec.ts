import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    teardown: { destroyAfterEach: false }
});
    service = TestBed.inject(SeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

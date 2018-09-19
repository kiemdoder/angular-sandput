import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/testing/InMemoryDataService';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService, HttpClient],
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          dataEncapsulation: false
        })
      ]
    });
  });

  beforeEach(() => {
    const httpClient = TestBed.get(HttpClient);
    const messageService = new MessageService();
    service = new HeroService(httpClient, messageService);
  });

  it('should be created', inject([HeroService], (service2: HeroService) => {
    expect(service2).toBeTruthy();
  }));

  it('should provide heroes', (done: DoneFn) => {
    service.getHeroes().subscribe(heroes => {
      expect(heroes.length).toBeGreaterThan(0);
      done();
    });
  });
});

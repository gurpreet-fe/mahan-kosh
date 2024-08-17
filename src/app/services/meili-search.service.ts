import { Injectable } from '@angular/core';
import { MeiliSearch } from 'meilisearch';
import { environment } from '../environments/environment';
import { SearchServiceInterface } from '../interfaces/search-service.interface';

@Injectable({
  providedIn: 'root',
})
export class MeiliSearchService implements SearchServiceInterface {
  client = new MeiliSearch({
    host: environment.meilisearch.apiUrl,
    apiKey: environment.meilisearch.apiKey,
  });

  constructor() {}

  search(lexeme: string) {
    throw new Error('Method not implemented.');
  }
}

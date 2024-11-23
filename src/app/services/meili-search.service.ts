import { Injectable } from '@angular/core';
import { MeiliSearch, SearchResponse } from 'meilisearch';
import { environment } from '../environments/environment';
import { SearchServiceInterface } from '../interfaces/search-service.interface';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeiliSearchService implements SearchServiceInterface {
  client = new MeiliSearch({
    host: environment.meilisearch.apiUrl,
    apiKey: environment.meilisearch.apiKey,
  });

  constructor() {}

  search(headword: string): Observable<SearchResponse> {
    return from(this.client.index('mk-6').search(headword));
  }
}

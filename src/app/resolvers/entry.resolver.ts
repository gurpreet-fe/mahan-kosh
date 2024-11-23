import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Entry } from '../types/entry.type';
import { MeiliSearchService } from '../services/meili-search.service';

@Injectable({ providedIn: 'root' })
export class EntryResolver implements Resolve<Entry> {
  constructor(private meiliSearchService: MeiliSearchService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Entry> | Entry {
    const headword = route.paramMap.get('id')!;

    return this.meiliSearchService
      .search(headword)
      .pipe(map((res) => res.hits[0] as Entry));
  }
}

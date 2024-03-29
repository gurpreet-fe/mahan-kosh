import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { StretchedLinkDirective } from '../../directives/stretched-link/stretched-link.directive';
import { SharedModule } from '../../shared/shared.module';
import { Document } from '../../types/document.type';
import { KeyboardComponent } from '../keyboard/keyboard.component';

@Component({
  selector: 'mk-search',
  standalone: true,
  imports: [
    RouterLink,
    StretchedLinkDirective,
    SharedModule,
    KeyboardComponent,
    FormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchBarInput = '';
  showKeyboard = false;

  lexemeHits = signal<Document[] | undefined>(undefined);

  keyClick(val: any) {
    this.searchBarInput += val;
  }

  toggleKeyboard() {
    this.showKeyboard = !this.showKeyboard;
  }

  // async search(ev: any) {
  //   const val = ev.target.value;

  //   if (val) {
  //     const res = await this.typesense.searchSuggestionFor(val);
  //     const hits: Document[] | undefined = res.hits?.map((hit) => {
  //       const doc = hit.document as Document;
  //       return { id: doc.id, lexeme: doc.lexeme, definition: doc.definition };
  //     });

  //     if (hits) {
  //       this.lexemeHits.set(hits.slice(0, 5));
  //     } else {
  //       this.lexemeHits.set(undefined);
  //     }
  //   } else {
  //     this.lexemeHits.set(undefined);
  //   }
  // }
}

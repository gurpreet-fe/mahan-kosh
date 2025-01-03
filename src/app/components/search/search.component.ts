import { AsyncPipe, NgClass } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';

import { KeyboardComponent } from '@components/keyboard/keyboard.component';
import { StretchedLinkDirective } from '@directives/stretched-link/stretched-link.directive';
import { MeiliSearchService } from '@services/meili-search.service';
import { SharedModule } from '../../shared/shared.module';
import { Entry } from '../../types/entry.type';

@Component({
  selector: 'mk-search',
  imports: [
    AsyncPipe,
    FormsModule,
    KeyboardComponent,
    NgClass,
    ReactiveFormsModule,
    SharedModule,
    StretchedLinkDirective,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger) acTrigger!: MatAutocompleteTrigger;
  @ViewChild(MatAutocomplete) ac!: MatAutocomplete;

  headwordControl = new FormControl('');
  showKeyboard = false;
  entryHits$ = new BehaviorSubject<Entry[]>([]);

  constructor(private meilisearchService: MeiliSearchService) {}

  ngOnInit(): void {
    this.headwordControl.valueChanges
      .pipe(
        switchMap((val) => this.meilisearchService.search(val!)),
        map((res) => res.hits as Entry[]),
        tap((hits) => {
          this.entryHits$.next(hits);
        })
      )
      .subscribe();
  }

  keyClick(val: any) {
    const value = this.headwordControl.value! + val;
    this.headwordControl.setValue(value);

    setTimeout(() => {
      this.acTrigger.openPanel();
    }, 60);
  }

  closeKeyboard() {
    if (this.showKeyboard === true) {
      this.toggleKeyboard();
    }
  }

  toggleKeyboard() {
    this.showKeyboard = !this.showKeyboard;

    requestAnimationFrame(() => {
      this.acTrigger.updatePosition();
    });
  }

  clearSearchBar() {
    this.headwordControl.reset('');
  }
}

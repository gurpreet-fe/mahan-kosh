import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Entry } from '../../types/entry.type';
import { MaterialModule } from '../../shared/material/material.module';
import { LayoutFacade } from '../../state/layout/layout.facade';
import { Layout } from '../../types/layout.type';

@Component({
  selector: 'mk-entry',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class EntryComponent implements OnInit, OnDestroy {
  entry = signal<Entry | undefined>(undefined);
  list = [];

  route: ActivatedRoute = inject(ActivatedRoute);

  #destroy = new Subject<void>();

  constructor(private layoutFacade: LayoutFacade) {
    this.route.data.subscribe(({ entry }) => {
      this.entry.set(entry);
    });
  }

  ngOnInit(): void {
    this.layoutFacade.setLayout('compact');
  }

  ngOnDestroy(): void {
    this.#destroy.next();
    this.#destroy.complete();
  }
}

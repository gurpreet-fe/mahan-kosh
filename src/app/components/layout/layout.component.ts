import { Component, HostBinding, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { tap } from 'rxjs';

import { SharedModule } from '../../shared/shared.module';
import { LayoutFacade } from '../../state/layout/layout.facade';
import { Layout } from '../../types/layout.type';
import { HeaderComponent } from '../header/header.component';
import { KeyboardComponent } from '../keyboard/keyboard.component';
import { SearchComponent } from '../search/search.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'mk-layout',
  standalone: true,
  imports: [
    SharedModule,
    RouterOutlet,
    HeaderComponent,
    SearchComponent,
    KeyboardComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  animations: [
    trigger('layout', [
      state(
        'standard',
        style({
          opacity: 1,
          height: 'auto',
          'margin-top': '96px',
          visibility: 'visible',
        })
      ),
      state(
        'compact',
        style({
          opacity: 0,
          height: 0,
          'margin-top': 0,
          visibility: 'hidden',
        })
      ),
      transition('standard => compact', [animate('0.1s ease-in-out')]),
      transition('compact => standard', [animate('0.1s ease-in-out')]),
    ]),
  ],
})
export class LayoutComponent implements OnInit {
  @HostBinding('attr.mode') get layoutMode(): Layout {
    return this.#layoutMode;
  }
  #layoutMode: Layout = 'standard';

  layout$ = this.layoutFacade.layout$.pipe(
    tap((layout) => {
      this.#layoutMode = layout;
    })
  );

  val = '';
  list = signal<any>(undefined);

  constructor(private layoutFacade: LayoutFacade) {}

  ngOnInit(): void {
    this.layout$.subscribe();
  }
}

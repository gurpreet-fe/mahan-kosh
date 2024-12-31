import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  HostBinding,
  OnInit,
  signal
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { tap } from 'rxjs';

import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { SearchComponent } from '@components/search/search.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutFacade } from '../../state/layout/layout.facade';
import { Layout } from '../../types/layout.type';

@Component({
  selector: 'mk-layout',
  standalone: true,
  imports: [
    SharedModule,
    RouterOutlet,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    RouterOutlet,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  animations: [
    trigger('layout', [
      state(
        'standard',
        style({
          opacity: 1,
          'padding-top': '192px',
          visible: 'visible',
        })
      ),
      state(
        'compact',
        style({
          opacity: 0,
          'padding-top': 0,
          visible: 'hidden',
        })
      ),
      transition('standard => compact', [animate('0.2s ease-in-out')]),
      transition('compact => standard', [animate('0.2s ease-in-out')]),
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

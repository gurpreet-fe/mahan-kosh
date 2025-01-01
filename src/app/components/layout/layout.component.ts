import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit,
  signal,
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
  imports: [
    SharedModule,
    RouterOutlet,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
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
          visibility: 'visible',
        })
      ),
      state(
        'compact',
        style({
          opacity: 0,
          'padding-top': 0,
          visibility: 'hidden',
        })
      ),
      transition('standard => compact', [animate('0.2s ease-in-out')]),
      transition('compact => standard', [animate('0.2s ease-in-out')]),
    ]),
  ],
  host: {
    'attr.mode': 'layoutMode',
  },
})
export class LayoutComponent implements OnInit {
  layoutMode: Layout = 'standard';

  layout$ = this.layoutFacade.layout$.pipe(
    tap((layout) => {
      this.layoutMode = layout;
      this.cd.detectChanges();
    })
  );

  val = '';
  list = signal<any>(undefined);

  constructor(
    private layoutFacade: LayoutFacade,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.layout$.subscribe();
  }
}

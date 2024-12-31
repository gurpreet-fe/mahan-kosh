import { Component, OnInit } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LayoutFacade } from '../../state/layout/layout.facade';

@Component({
    selector: 'mk-header',
    imports: [SharedModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    host: {
        class: 'header'
    }
})
export class HeaderComponent implements OnInit {
  layout$ = this.layoutFacade.layout$;

  constructor(private layoutFacade: LayoutFacade) {}

  ngOnInit(): void {}
}

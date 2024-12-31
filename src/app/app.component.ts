import { Component } from '@angular/core';

import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'mk-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LayoutComponent],
})
export class AppComponent {
  title = 'mahan-kosh';

  constructor() {}
}

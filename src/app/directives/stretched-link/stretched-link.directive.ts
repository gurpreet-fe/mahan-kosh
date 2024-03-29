import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[mkStretchedLink]',
  standalone: true,
})
export class StretchedLinkDirective {
  @HostBinding('class') class = 'stretched-link';

  constructor() {}
}

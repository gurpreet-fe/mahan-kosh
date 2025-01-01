import { Component, HostBinding, output } from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'mk-key',
  templateUrl: './key.component.html',
  styleUrl: './key.component.scss',
  imports: [MatRipple],
})
export class KeyComponent {
  @HostBinding('class') class = 'key-container';
  keyClick = output();

  emitKeyClick() {
    this.keyClick.emit();
  }
}

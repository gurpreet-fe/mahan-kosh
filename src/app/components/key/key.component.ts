import { Component, HostBinding, output } from '@angular/core';

@Component({
  selector: 'mk-key',
  standalone: true,
  templateUrl: './key.component.html',
  styleUrl: './key.component.scss',
})
export class KeyComponent {
  @HostBinding('class') class = 'key-container';
  keyClick = output();

  emitKeyClick() {
    this.keyClick.emit();
  }
}

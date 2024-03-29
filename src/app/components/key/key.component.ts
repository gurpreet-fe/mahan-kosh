import { Component, EventEmitter, HostBinding, Output } from '@angular/core';

@Component({
  selector: 'mk-key',
  standalone: true,
  templateUrl: './key.component.html',
  styleUrl: './key.component.scss',
})
export class KeyComponent {
  @HostBinding('class') class = 'key-container';
  @Output() keyClick = new EventEmitter();

  emitKeyClick() {
    this.keyClick.emit();
  }
}

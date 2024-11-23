import { Component, HostBinding, output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'mk-key',
  standalone: true,
  templateUrl: './key.component.html',
  styleUrl: './key.component.scss',
  imports: [SharedModule]
})
export class KeyComponent {
  @HostBinding('class') class = 'key-container';
  keyClick = output();

  emitKeyClick() {
    this.keyClick.emit();
  }
}

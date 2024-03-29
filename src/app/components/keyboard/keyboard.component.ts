import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { KeyComponent } from '../key/key.component';

@Component({
  selector: 'mk-keyboard',
  standalone: true,
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss',
  imports: [KeyComponent],
})
export class KeyboardComponent {
  @HostBinding('class') class = 'keyboard';
  @Output() keyClick = new EventEmitter<string>();

  gurmukhiAlphabetMap = new Map([
    ['ੳ', 'A'], ['ਅ', 'd'], ['ੲ', 'D'], ['ਸ', 'm'], ['ਹ', 'u'],
    ['ਕ', 'k'], ['ਖ', 'K'], ['ਗ', 'i'], ['ਘ', 'I'], ['ਙ', '*'],
    ['ਚ', 'W'], ['ਛ', 'Q'], ['ਜ', 'p'], ['ਝ', 'P'], ['ਞ', '*'],
    ['ਟ', 'R'], ['ਠ', 'T'], ['ਡ', 'G'], ['ਢ', 'F'], ['ਣ', 'C'],
    ['ਤ', 'l'], ['ਥ', 'L'], ['ਦ', 'o'], ['ਧ', 'O'], ['ਨ', 'v'],
    ['ਪ', 'h'], ['ਫ', 'H'], ['ਬ', 'y'], ['ਭ', 'U'], ['ਮ', 'c'],
    ['ਯ', 'Y'], ['ਰ', 'j'], ['ਲ', 'n'], ['ਵ', 'b'], ['ੜ', 'v'],
  ]);
  gurmukhiAlphabetKeys = Array.from(this.gurmukhiAlphabetMap.keys());
  gurmukhiAlphabetVals = Array.from(this.gurmukhiAlphabetMap.values());

  emitKeyValue(val: string) {
    this.keyClick.emit(val);
  }
}

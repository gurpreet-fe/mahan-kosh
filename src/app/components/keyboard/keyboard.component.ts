import { Component, HostBinding, output } from '@angular/core';
import { KeyComponent } from '../key/key.component';

@Component({
    selector: 'mk-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrl: './keyboard.component.scss',
    imports: [KeyComponent]
})
export class KeyboardComponent {
  @HostBinding('class') class = 'keyboard';
  keyClick = output<string>();

  // prettier-ignore
  gurmukhiAlphabetMap = new Map([
    ['ੳ', 'A'], ['ਅ', 'd'], ['ੲ', 'D'], ['ਸ', 'm'], ['ਹ', 'u'],
    ['ਕ', 'k'], ['ਖ', 'K'], ['ਗ', 'i'], ['ਘ', 'I'], ['ਙ', 'ù'],
    ['ਚ', 'W'], ['ਛ', 'Q'], ['ਜ', 'p'], ['ਝ', 'P'], ['ਞ', 'ø'],
    ['ਟ', 'R'], ['ਠ', 'T'], ['ਡ', 'G'], ['ਢ', 'F'], ['ਣ', 'C'],
    ['ਤ', 'l'], ['ਥ', 'L'], ['ਦ', 'o'], ['ਧ', 'O'], ['ਨ', 'v'],
    ['ਪ', 'h'], ['ਫ', 'H'], ['ਬ', 'y'], ['ਭ', 'Y'], ['ਮ', 'c'],
    ['ਯ', 'U'], ['ਰ', 'j'], ['ਲ', 'n'], ['ਵ', 'b'], ['ੜ', 'V'],
  ]);
  gurmukhiAlphabetKeys = Array.from(this.gurmukhiAlphabetMap.keys());
  gurmukhiAlphabetVals = Array.from(this.gurmukhiAlphabetMap.values());

  // prettier-ignore
  diacriticsMap = new Map([
    ['ਾ', 'e'],
    ['ਿ', 'f'], ['ੀ', 'r'],
    ['ੁ', 'g'], ['ੂ', 't'],
    ['ੇ', 's'], ['ੈ', 'w'],
    ['ੋ', 'a'], ['ੌ', 'q'],
    ['ਂ', 'n'], ['ੰ', 'x'], ['ੱ', 'z'],
  ])

  // prettier-ignore
  subscriptsMap = new Map([
    ['੍ਰ', 'J'], ['੍ਵ', 'Í'], ['੍ਹ', 'B'],
  ])

  matrasMap = new Map([...this.diacriticsMap, ...this.subscriptsMap]);
  matrasKeys = Array.from(this.matrasMap.keys());
  matrasVals = Array.from(this.matrasMap.values());

  emitKeyValue(val: string) {
    this.keyClick.emit(val);
  }
}

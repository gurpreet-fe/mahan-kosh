import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'mk-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    SharedModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    SearchComponent,
    KeyboardComponent,
  ],
})
export class AppComponent {
  title = 'mahaan-kosh';
  val = '';
  list = signal<any>(undefined);

  constructor() {}

  met(val: any) {
    console.log(val);
  }
}

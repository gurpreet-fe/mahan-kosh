import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type Lexeme = {
  id: string;
  lexeme: string;
  definition: string;
};

@Component({
  selector: 'mk-lexeme',
  standalone: true,
  imports: [],
  templateUrl: './lexeme.component.html',
  styleUrl: './lexeme.component.scss',
})
export class LexemeComponent {
  lexeme = signal<Lexeme | undefined>(undefined);

  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe(async (params) => {
      const id = params['id'];
    });
  }
}

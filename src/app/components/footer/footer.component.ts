import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
    selector: 'mk-footer',
    imports: [SharedModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    host: {
        class: 'footer',
    }
})
export class FooterComponent {}

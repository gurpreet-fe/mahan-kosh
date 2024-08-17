import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { NgModule } from '@angular/core';

@NgModule({
  exports: [MatButtonModule, MatIconModule, MatRippleModule, MatInputModule],
})
export class MaterialModule {}

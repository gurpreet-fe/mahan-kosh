import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [MatButtonModule, MatIconModule, MatRippleModule],
})
export class MaterialModule {}

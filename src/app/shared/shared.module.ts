import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [RouterLink],
  exports: [CommonModule, MaterialModule, RouterLink],
})
export class SharedModule {}

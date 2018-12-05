import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components.module';
import { RouterModule } from '@angular/router';
import { Component1Component } from 'src/app/c1';

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild([
      {path: '', component: Component1Component},
    ])
  ]
})
export class M1Module {}
